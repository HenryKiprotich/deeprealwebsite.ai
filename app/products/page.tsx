"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  // State for the typewriter effect
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  // The full text for the BrandVibe AI description
  const fullText = "BrandVibe AI is an AI-powered sentiment analyzer that monitors social media user's views concerning a specific product or service. It uses a fine-tuned cardiffnlp/twitter-roberta-base language processing (NLP) model to classify comments and establish the users intent.";
  
  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return;
    
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 60); // Adjust typing speed here
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayText, fullText, isTyping]);
  
  // Reset typing effect on page refresh - this only works when the page is actually refreshed
  useEffect(() => {
    setDisplayText("");
    setIsTyping(true);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="text-white p-6 rounded-lg shadow-lg mt-24">
        <h1 className="text-3xl text-center font-bold">Our Products</h1>
        <p className="mt-2 text-sm text-center">
          Explore our cutting-edge AI-driven products in various industries.
        </p>
      </div>     

      <div className="mt-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="relative h-64 w-full mx-auto rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/SocialMedia.png" 
                    alt="DeepScanAI Logo" 
                    fill 
                    style={{objectFit: "contain"}}
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">BrandVibe AI</h3>
                <div className="h-32 overflow-hidden"> {/* Fixed height container for text */}
                  <p className="text-gray-600 typewriter-text">
                    {displayText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </p>
                </div>
                <a 
                  href="https://brandvibeai.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Try BrandVibe AI
                </a>
              </div>
            </div>
          </div>
        </div>
           
      {/* Future Products Section */}
      <div className="mt-6 bg-blue-300 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming AI Innovations</h2>
        <p className="mt-2 text-gray-600">
          We are continuously developing AI-powered solutions across various industries, including Healthcare, Education, Finance and Business Automation.
        </p>
        <p className="mt-2 text-gray-600">
          If you are interested in partnering with us to develop AI solutions, contact us at:
          <a href="mailto:Deepreal01@gmail.com" className="text-indigo-500 hover:underline ml-1">
            Deepreal01@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}