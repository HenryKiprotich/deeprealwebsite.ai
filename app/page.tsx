"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HomePage() {
  // News Slider State
  const newsItems = [
    {
      img: "/remotasks.png",
      title: "Learn how to make money online through AI.",
      description:
        "Discover how AI-driven solutions can help you earn money online through freelancing, automation, and data-driven opportunities.",
    },
    {
      img: "/VetImage.png",
      title: "Join us in developing a veterinary expert system for diagnosing diseases in animals.",
      description:
        "Be part of an AI-powered project focused on improving veterinary healthcare with automated disease diagnosis for animals.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide news every 5 seconds with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  // Items for alternate layout section
  const productItems = [
    {
      src: "/remotasks.png",
      alt: "Remotasks logo",
      text: "Remotasks: Access accounts, experienced AI taskers and account managers",
    },
    {
      src: "/rag_fine_tuning.png",
      alt: "RAG vs Fine-Tuning",
      text: "RAG vs Fine-Tuning: Contact us, we streamline your business",
    },
    {
      src: "/data_annotation.png",
      alt: "Machine Learning",
      text: "Data Annotation: Get accounts, experienced data annotators and account managers",
    },
    {
      src: "/learningAI.png",
      alt: "Deep Learning",
      text: "Deep Real Academy: Enroll, learn a skill and earn money.",
    },
    {
      src: "/do_not_misuseAI.png",
      alt: "AI Ethics",
      text: "AI ethical education: Partner with us to promote constructive use of AI in schools and colleges.",
    },
    {
      src: "/AIData_analysis.png",
      alt: "AI Data Analytics",
      text: "AI powered data analytics: We optimize AI to analyze data for better decision making.",
    },
  ];

  return (
    <main className="p-8 min-h-screen bg-indigo-900 text-white">
      {/* Header Section */}
      <div className="p-6 flex items-center space-x-4 bg-gradient-to-r from-indigo-700 to-gray-800 rounded-lg shadow-2xl border-0">
        <div className="relative w-16 h-16">
          <Image
            src="/DeepRealLogo.png"
            alt="Deep Real Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-3xl font-bold p-2">Welcome to Deep Real</h1>
      </div>

      {/* News Slider Section */}
      <div className="relative mt-8 w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl border-0">
        <div className="relative h-64">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {newsItems[currentIndex].title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {newsItems[currentIndex].description}
          </p>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
            )
          }
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          Let us help you explore the world of Artificial Intelligence for research, development, and education.
        </div>

        {/* Alternate Layout Section */}
        <div className="mt-12 space-y-12">
          {productItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-full p-4 md:w-1/2">
                    <div
                      className="bg-cover bg-center text-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
                      style={{
                        backgroundImage: "linear-gradient(to right, #4c51bf, #2d3748)",
                      }}
                    >
                      <p className="text-lg font-bold">{item.text}</p>
                    </div>
                  </div>
                  <div className="w-full p-4 md:w-1/2">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                      <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full p-4 md:w-1/2">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                      <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
                    </div>
                  </div>
                  <div className="w-full p-4 md:w-1/2">
                    <div
                      className="bg-cover bg-center text-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
                      style={{
                        backgroundImage: "linear-gradient(to right, #4c51bf, #2d3748)",
                      }}
                    >
                      <p className="text-lg font-bold">{item.text}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Visit Deep Real Academy Button */}
        <div className="text-center mt-12 p-2 rounded-lg">
          <a
            href="/academyinfo"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition rounded-lg text-xl font-bold shadow-2xl"
          >
            Visit Deep Real Academy
          </a>
        </div>        
      </div>
    </main>
  );
}
