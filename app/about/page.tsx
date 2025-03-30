'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  // State for typewriter effect
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [displayText3, setDisplayText3] = useState("");
  const [isTyping1, setIsTyping1] = useState(true);
  const [isTyping2, setIsTyping2] = useState(true);
  const [isTyping3, setIsTyping3] = useState(true);

  // Full testimonial texts
  const fullText1 = "Deep Real has completely transformed our operations with their AI solutions. Our workflow is more efficient than ever!";
  const fullText2 = "Their AI strategies have helped us make smarter decisions and take our business to the next level.";
  const fullText3 = "I can't imagine running my business without their AI solutions. They truly understand our needs!";

  // Typing effect for testimonial 1
  useEffect(() => {
    if (!isTyping1) return;
    
    if (displayText1.length < fullText1.length) {
      const timeout = setTimeout(() => {
        setDisplayText1(fullText1.slice(0, displayText1.length + 1));
      }, 50);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping1(false);
    }
  }, [displayText1, fullText1, isTyping1]);

  // Typing effect for testimonial 2
  useEffect(() => {
    if (!isTyping2) return;
    
    if (displayText2.length < fullText2.length) {
      const timeout = setTimeout(() => {
        setDisplayText2(fullText2.slice(0, displayText2.length + 1));
      }, 50);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping2(false);
    }
  }, [displayText2, fullText2, isTyping2]);

  // Typing effect for testimonial 3
  useEffect(() => {
    if (!isTyping3) return;
    
    if (displayText3.length < fullText3.length) {
      const timeout = setTimeout(() => {
        setDisplayText3(fullText3.slice(0, displayText3.length + 1));
      }, 50);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping3(false);
    }
  }, [displayText3, fullText3, isTyping3]);

  // Reset typing effect when component mounts or is refreshed
  useEffect(() => {
    setDisplayText1("");
    setDisplayText2("");
    setDisplayText3("");
    setIsTyping1(true);
    setIsTyping2(true);
    setIsTyping3(true);
  }, []);

  return (
    <>    
      {/* Who We Are Section */}
      <div className="mt-24 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-semibold text-white">Who We Are</h2>
        <p className="mt-4 text-white">
          Deep Real Inc. is a dynamic startup focused on providing innovative Artificial Intelligence (AI) solutions.
          We are transforming businesses and communities by making AI technology accessible, ethical, and impactful.
        </p>
      </div>

      {/* Services Section */}
      <div className="mt-8 bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black text-center">Our Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1 */}
          <div className="text-center p-6 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            <h3 className="text-xl font-semibold text-white">Financial Credit Scoring AI</h3>
            <p className="text-white text-sm mt-2">Our AI models analyze financial data to predict creditworthiness, helping lenders make informed decisions and reduce default risk.</p>
          </div>

          {/* Service 2 */}
          <div className="text-center p-6 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors shadow-md">
            <h3 className="text-xl font-semibold text-white">Autonomous Agent Development</h3>
            <p className="text-white text-sm mt-2">We build intelligent agents for workflow automation and decision-making processes.</p>
          </div>    

          {/* Service 3 */}
          <div className="text-center p-6 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            <h3 className="text-xl font-semibold text-white">AI Strategy Development</h3>
            <p className="text-white text-sm mt-2">We help enterprises develop AI strategies to leverage advanced technology for growth.</p>
          </div>
          
          {/* Service 4 - Social Media Monitoring */}
          <div className="text-center p-6 bg-indigo-700 rounded-lg hover:bg-indigo-600 transition-colors shadow-md">
            <h3 className="text-xl font-semibold text-white">Social Media Sentiment Analysis</h3>
            <p className="text-white text-sm mt-2">Our AI tracks and analyzes social media conversations about your brand, products or services to provide actionable consumer perception insights.</p>
          </div>
        </div>
      </div>
      
      {/* Customer Testimonials Section */}
      <div className="mt-8 bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-white text-center">Happy Customers</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 with typewriter effect */}
          <div className="p-6 bg-indigo-800 rounded-lg text-center text-white shadow-md hover:shadow-lg transition-shadow">
            <div className="h-32 flex items-center justify-center">
              <p className="italic">
                "{displayText1}
                {isTyping1 && <span className="animate-pulse">|</span>}"
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">John Williams</h4>
              <p className="text-indigo-200 text-sm">CEO, Tech Innovators</p>
            </div>
          </div>

          {/* Testimonial 2 with typewriter effect */}
          <div className="p-6 bg-blue-700 rounded-lg text-center text-white shadow-md hover:shadow-lg transition-shadow">
            <div className="h-32 flex items-center justify-center">
              <p className="italic">
                "{displayText2}
                {isTyping2 && <span className="animate-pulse">|</span>}"
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Jessica Taylor</h4>
              <p className="text-blue-200 text-sm">COO, Future Enterprises</p>
            </div>
          </div>

          {/* Testimonial 3 with typewriter effect */}
          <div className="p-6 bg-indigo-700 rounded-lg text-center text-white shadow-md hover:shadow-lg transition-shadow">
            <div className="h-32 flex items-center justify-center">
              <p className="italic">
                "{displayText3}
                {isTyping3 && <span className="animate-pulse">|</span>}"
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Mark Brown</h4>
              <p className="text-indigo-200 text-sm">Founder, Global Tech Solutions</p>
            </div>
          </div>
        </div>
      </div>
      {/* Meet the Founders Section */}
      <div className="mt-8 bg-gray-600 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black text-center">Meet Our Founders</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Founder 1 */}
          <div className="text-center bg-opacity-40 p-6 rounded-lg">
            <div className="w-40 h-40 mx-auto border-indigo-400 shadow-xl">
              <Image src="/robot.png" alt="Henry Kiprotich" width={160} height={160} className="rounded-full object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Henry Kiprotich</h3>
            <p className="text-blue-200 text-sm">CEO, Data & AI Solutions Engineer</p>
          </div>

          {/* Founder 2 */}
          <div className="text-center bg-opacity-40 p-6 rounded-lg">
            <div className="w-40 h-40 mx-auto border-blue-400 shadow-xl">
              <Image 
                src="/kenny_avatar.png"
                alt="Kennedy Wambua"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Kennedy Wambua</h3>
            <p className="text-blue-200 text-sm">CTO, Software Engineer & Cyber Security Specialist</p>
          </div>

          {/* Founder 3 */}
          <div className="text-center bg-opacity-40 p-6 rounded-lg">
            <div className="w-40 h-40 mx-auto shadow-xl">
              <Image 
                src="/GodfreyAvatar.png"
                alt="Godfrey Macharia"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Godfrey Macharia</h3>
            <p className="text-blue-200 text-sm">COO & AI Strategist</p>
          </div>
        </div>
      </div>     
    </>
  );
}