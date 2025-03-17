"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HomePage() {
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
        <h1 className="text-3xl font-bold p-2">Welcome to DeepReal<span className="text-sm align-super">AI</span></h1>
      </div>

      {/* Main Content Section */}
      <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          Let us help you explore the world of Artificial Intelligence for
          research, development, and education.
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
                        backgroundImage:
                          "linear-gradient(to right, #4c51bf, #2d3748)",
                      }}
                    >
                      <p className="text-lg font-bold">{item.text}</p>
                    </div>
                  </div>
                  <div className="w-full p-4 md:w-1/2">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full p-4 md:w-1/2">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="w-full p-4 md:w-1/2">
                    <div
                      className="bg-cover bg-center text-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #4c51bf, #2d3748)",
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
