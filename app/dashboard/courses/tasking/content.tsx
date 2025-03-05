"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CourseDocument {
  title: string;
  URL: string;
}

interface Subtopic {
  title: string;
  video_url: string;
  text_content: string;
  documents: CourseDocument[];
}

interface Subcourse {
  title: string;
  description: string;
  subtopics: Subtopic[];
}

interface CourseData {
  title: string;
  description: string;
  amount: number;
  subcourses: Subcourse[];
}

export default function TaskingCourseContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const courseCodeFromQuery = searchParams.get("course_code");
  const fallbackCourseCode = "tasking";
  const courseCode = courseCodeFromQuery || fallbackCourseCode;

  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const subtopicsRef = useRef<HTMLDivElement>(null);
  const fallbackCourseAmount = 200;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/courses/tasking", {
          credentials: "include",
        });

        if (res.status === 402) {
          router.replace(
            `/dashboard/payments?amount=${fallbackCourseAmount}&course_code=${courseCode}`
          );
        } else if (res.ok) {
          const data: CourseData = await res.json();
          setCourseData(data);
        } else {
          const errorText = await res.text();
          console.error("Error fetching course data:", errorText);
          setError("Error fetching course data.");
        }
      } catch (err) {
        console.error("Network error:", err);
        setError("Network error while fetching course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [router, courseCode]);

  const scrollLeft = () => {
    if (subtopicsRef.current) {
      subtopicsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (subtopicsRef.current) {
      subtopicsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading course...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No course data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Course Header */}
      <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{courseData.title}</h1>
        <p className="text-lg mt-2">{courseData.description}</p>
        <p className="mt-2">Course Price: Ksh {courseData.amount}</p>
      </div>

      {/* Subcourses and Subtopics */}
      {courseData.subcourses.map((subcourse, subcourseIndex) => (
        <div key={subcourseIndex} className="my-8">
          <h2 className="text-2xl font-semibold text-center mb-4">
            {subcourse.title}
          </h2>
          <p className="text-center mb-6">{subcourse.description}</p>

          <div className="relative">
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
            >
              &larr;
            </button>

            {/* Subtopics Slider */}
            <div
              ref={subtopicsRef}
              className="flex space-x-4 overflow-x-auto scroll-smooth px-12"
            >
              {subcourse.subtopics.map((subtopic, index) => (
                <div
                  key={index}
                  className="min-w-[300px] flex-shrink-0 bg-white p-4 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {subtopic.title}
                  </h3>

                  {/* Video */}
                  <video
                    className="w-[800px] h-[300px] rounded-lg shadow-md"
                    controls
                    controlsList="nodownload"
                  >
                    <source src={subtopic.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Text Area Below Video */}
                  <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-100">
                    <h4 className="font-semibold mb-2">Additional Information:</h4>
                    <p className="text-gray-700 whitespace-pre-line">
                      {subtopic.text_content}
                    </p>

                    {/* Related Resources */}
                    {subtopic.documents.length > 0 && (
                      <div className="mt-2">                        
                        <ul className="list-disc pl-5">
                          {subtopic.documents.map((doc, docIndex) => (
                            <li key={docIndex}>
                              <a
                                href={
                                  doc.URL && doc.URL.startsWith("http")
                                    ? doc.URL
                                    : `https://${doc.URL || ""}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline cursor-pointer"
                              >
                                {doc.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
            >
              &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
