'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HomePage() {
  // News Slider State
  const newsItems = [
    { 
      img: "/remotasks.png", 
      title: "Learn how to make money online through AI.", 
      description: "Discover how AI-driven solutions can help you earn money online through freelancing, automation, and data-driven opportunities." 
    },
    { 
      img: "/VetImage.png", 
      title: "Join us in developing a veterinary expert system for diagnosing diseases in animals.", 
      description: "Be part of an AI-powered project focused on improving veterinary healthcare with automated disease diagnosis for animals."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide news every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <main className="p-8 min-h-screen bg-indigo-100 dark:bg-gray-900">
      <div className="p-4 flex space-x-2 bg-indigo-300 dark:bg-indigo-700 rounded-lg shadow-lg">
        <Image src="/DeepRealLogo.png" alt="Deep Real Logo" width={48} height={48} className="h-12 w-auto" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome to Deep Real</h2>
      </div>

      {/* ✅ News Section (Smaller Frame Height) */}
      <div className="relative mt-6 w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Image Display - Smaller Height */}
        <Image 
          src={newsItems[currentIndex].img} 
          alt={newsItems[currentIndex].title} 
          width={800} 
          height={300} 
          className="w-full h-40 object-cover transition-opacity duration-700 ease-in-out"
        />
        {/* News Content */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{newsItems[currentIndex].title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{newsItems[currentIndex].description}</p>
        </div>
        {/* Navigation Buttons */}
        <button 
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1))}
        >
          <FaChevronLeft size={20} />
        </button>
        <button 
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          Let us help you in exploring the Artificial Intelligence (AI) field to improve business and achieve personal growth.
        </div>

        {/* ✅ Responsive Grid for Small & Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            { src: "/remotasks.png", alt: "Remotasks logo", text: "Remotasks: Access accounts, experienced AI taskers and account managers" },
            { src: "/rag_fine_tuning.png", alt: "RAG vs Fine-Tuning", text: "RAG vs Fine-Tuning: Contact us, we streamline your business" },
            { src: "/data_annotation.png", alt: "Machine Learning", text: "Data Annotation: Get accounts, experienced data annotators and account managers" },
            { src: "/learningAI.png", alt: "Deep Learning", text: "Deep Real Academy: Enroll, learn a skill and earn money." },
            { src: "/do_not_misuseAI.png", alt: "AI Ethics", text: "AI ethical education: Partner with us to promote constructive use of AI in schools and colleges." },
            { src: "/AIData_analysis.png", alt: "AI Data Analytics", text: "AI powered data analytics: We optimize AI to analyze data for better decision making." }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden shadow-md">
                <Image src={item.src} alt={item.alt} layout="fill" objectFit="contain" />
              </div>
              <p className="mt-2 text-sm text-gray-900 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div> 

        {/* ✅ Visit Deep Real Academy Button */}
        <div className="text-center mt-6">
          <a href="/academyinfo" className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition shadow-lg">
            Visit Deep Real Academy
          </a>
        </div>

        {/* ✅ Improved Email Section */}
        <div className="text-center mt-6 bg-indigo-300 p-4 rounded-lg shadow-md">
          <p className="text-rose-700 dark:text-rose-400 font-semibold text-lg">
            Request a service through
          </p>
          <a href="mailto:Deepreal01@gmail.com" className="block mt-2 text-lg font-semibold text-blue-500 hover:underline">
            Deepreal01@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
