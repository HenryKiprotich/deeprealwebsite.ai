//./app/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for a valid JWT cookie by calling /auth/verify
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/auth/verify", {
          credentials: "include",
        });
        if (!res.ok) {
          router.push("/auth/signinup");
        } else {
          setAuthorized(true);
        }
      } catch (error) {
        router.push("/auth/signinup");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  // While checking authorization
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // If unauthorized, nothing is rendered (redirection already triggered)
  if (!authorized) {
    return null;
  }

  // Dashboard content rendered only if user is authorized
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="bg-indigo-500 dark:bg-indigo-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to Deep Real Academy</h1>
        <p className="text-sm text-white">Empowering the future with AI education</p>
      </div>

      {/* Content Section */}
      <main className="flex-grow p-8 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Our AI Courses</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tasking Course */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/tasking" className="hover:underline text-indigo-600 dark:text-indigo-400">
                Tasking Course for Outlier and Remotasks
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Learn how to efficiently work on Outlier AI and Remotasks platforms, specializing in AI training data labeling.
            </p>
          </div>

          {/* Prompt Engineering */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/prompt-engineering" className="hover:underline text-indigo-600 dark:text-indigo-400">
                Prompt Engineering for Transformers (LLMs): ChatGPT & DeepSeek
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Learn how to write a perfect prompt to get a good response to assist you deliver a quality task in Outlier.
            </p>
          </div>

          {/* Data Analysis */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/data-analysis" className="hover:underline text-indigo-600 dark:text-indigo-400">
                Data Analysis with AI
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Learn fundamental data analysis techniques.
            </p>
          </div>

          {/* AI Fundamentals */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/ai-fundamentals" className="hover:underline text-indigo-600 dark:text-indigo-400">
                AI Fundamentals
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Learn the basics of Artificial Intelligence, including its applications, history, and ethical considerations.
            </p>
          </div>

          {/* Machine Learning */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/machine-learning" className="hover:underline text-indigo-600 dark:text-indigo-400">
                Machine Learning
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Dive into the world of supervised and unsupervised learning, and understand how machines learn from data.
            </p>
          </div>

          {/* Deep Learning */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/deep-learning" className="hover:underline text-indigo-600 dark:text-indigo-400">
                Deep Learning
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Explore neural networks, convolutional networks, and modern AI architectures used in computer vision and NLP.
            </p>
          </div>

          {/* NLP */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/nlp" className="hover:underline text-indigo-600 dark:text-indigo-400">
                Natural Language Processing (NLP)
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Understand how AI processes human language and builds applications like chatbots and speech recognition.
            </p>
          </div>

          {/* AI Ethics */}
          <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              <a href="/dashboard/courses/ai-ethics" className="hover:underline text-indigo-600 dark:text-indigo-400">
                AI Ethics & Responsible AI
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Explore the ethical implications of AI and how to develop responsible AI solutions that prioritize fairness and transparency.
            </p>
          </div>          
        </div>
      </main>
    </div>
  );
}


