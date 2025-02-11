"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the structure of course content
type CourseKey = "intro" | "labeling";

interface Course {
  title: string;
  description: string;
  video: string;
  documents: string[];
}

// Define course content with explicit type
const courseContent: Record<CourseKey, Course> = {
  intro: {
    title: "How to Use the Platform",
    description: "Learn how to navigate the Outlier platform.",
    video: "https://res.cloudinary.com/doozi6jzs/video/upload/v1739021008/Tauren_Wells_Gary_LeVox_-_Until_Grace_Official_Lyric_Video_vuxhdk.mp4",
    documents: ["https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/platform-guide.pdf"],
  },
  labeling: {
    title: "Learn how to handle the Mathematics Outlier Projects",
    description: "Green Wizard, Mighty Moo, Laurin Sun, Matcha English Stem",
    video: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v123456789/data-labeling.mp4",
    documents: ["https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/labeling-guide.pdf"],
  },
};

export default function TaskingCoursePage() {
  const [selectedProject, setSelectedProject] = useState<CourseKey>("intro");
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      const userEmail = sessionStorage.getItem("userEmail");
      const userPhone = sessionStorage.getItem("userPhoneNumber");

      if (!userEmail) {
        router.replace("/auth/signin"); // Redirect if user is not logged in
        return;
      }

      try {
        const response = await fetch("https://deepreal-flask-backend.onrender.com/check_access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail }),
        });

        const data = await response.json();

        if (data.access || userPhone === "254708374149") {
          // ✅ Allow access if user has paid or is using the Daraja Sandbox number
          setIsPaid(true);
        } else {
          router.replace("/payments"); // ❌ Redirect to payment page
        }
      } catch (error) {
        console.error("Access Error:", error);
        router.replace("/payments"); // Redirect if there's an error
      } finally {
        setLoading(false);
      }
    };

    checkAccess(); // Call Flask API to verify access
  }, [router]);

  if (loading) {
    return <p>Checking payment status...</p>;
  }

  if (!isPaid) {
    return <p>Redirecting to payment...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Course Header */}
      <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Tasking Course for Outlier and Remotasks</h1>
        <p className="text-lg mt-2">Learn AI training and data labeling step-by-step.</p>
      </div>

      {/*{/* Sidebar for Navigation */}
<div className="flex flex-grow p-8 bg-gray-100 dark:bg-gray-900">
<aside className="w-1/4 bg-indigo-100 dark:bg-gray-800 p-4 shadow-lg rounded-lg">
  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Course Modules</h2>
  <ul className="mt-2 space-y-2">
    {Object.entries(courseContent).map(([key, project]) => (
      <li key={key}>
        <button
          className={`w-full h-20 text-left px-4 py-2 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis ${
            selectedProject === key
              ? "bg-indigo-500 text-white" 
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
          }`}
          onClick={() => setSelectedProject(key as CourseKey)}
          style={{ maxWidth: "100%" }} // Prevents text from breaking out
        >
          {project.title}
        </button>
      </li>
    ))}
  </ul>
</aside>

        {/* Main Course Content */}
        <main className="flex-grow p-6 bg-indigo-200 dark:bg-gray-800 shadow-lg rounded-lg ml-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{courseContent[selectedProject].title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{courseContent[selectedProject].description}</p>

          {/* Video Section (No Download) */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Watch Video</h3>
            <video className="w-full rounded-lg shadow-md" controls controlsList="nodownload">
              <source src={courseContent[selectedProject].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Documents Section (No Download) */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Read Course Documents</h3>
            <ul className="mt-2 space-y-2">
              {courseContent[selectedProject].documents.map((doc, index) => (
                <li key={index}>
                  <iframe src={doc} className="w-full h-96 border-2 border-gray-300 dark:border-gray-600 rounded-lg"></iframe>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
