"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Subtopic {
  title: string;
  video_url: string;
  documents: string[];
}

interface CourseData {
  title: string;
  description: string;
  amount: number; // Course price (e.g., 100)
  subtopics: Subtopic[];
}

export default function DataAnalysisCourseContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseCodeFromQuery = searchParams.get("course_code");
  // Fallback to "data-analysis" if no query parameter is present.
  const fallbackCourseCode = "data-analysis";
  const courseCode = courseCodeFromQuery ? courseCodeFromQuery : fallbackCourseCode;

  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const subtopicsRef = useRef<HTMLDivElement>(null);

  // Fallback course amount in case the backend returns 402 without a body.
  const fallbackCourseAmount = 100;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/courses/data-analysis", {
          credentials: "include", // send JWT cookie along with request
        });
        if (res.status === 402) {
          // Payment is required; redirect to the payments page with the course amount.
          router.replace(`/dashboard/payments?amount=${fallbackCourseAmount}&course_code=${courseCode}`);
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

      {/* Subtopics Slider */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Subtopics</h2>
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
          >
            &larr;
          </button>
          {/* Slider Container */}
          <div 
            ref={subtopicsRef} 
            className="flex space-x-4 overflow-x-auto scroll-smooth px-12"
          >
            {courseData.subtopics.map((subtopic, index) => (
              <div 
                key={index} 
                className="min-w-[300px] flex-shrink-0 bg-white p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{subtopic.title}</h3>
                <video 
                  className="w-[800px] h-[300px] rounded-lg shadow-md" 
                  controls 
                  controlsList="nodownload"
                >
                  <source src={subtopic.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <ul className="mt-2 space-y-2">
                  {subtopic.documents.map((doc, docIndex) => (
                    <li key={docIndex}>
                      <iframe 
                        src={doc} 
                        className="w-full h-48 border-2 border-gray-300 rounded-lg"
                      ></iframe>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
