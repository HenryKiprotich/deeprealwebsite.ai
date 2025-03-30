'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBook, FaChalkboardTeacher, FaChartLine, FaBrain, FaLaptopCode, FaLanguage } from 'react-icons/fa';

export default function AcademyInfoPage() {
  // Animation states
  const [showInitialContent, setShowInitialContent] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    courses: false,
    enrollment: false
  });
  
  // Refs for scroll animations
  const coursesRef = useRef<HTMLDivElement>(null);
  const enrollmentRef = useRef<HTMLDivElement>(null);
  
  // Set up animations
  useEffect(() => {
    // Trigger initial animations
    setTimeout(() => {
      setShowInitialContent(true);
    }, 100);
    
    // Setup intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (entry.target === coursesRef.current) {
            setVisibleSections(prev => ({ ...prev, courses: true }));
          } else if (entry.target === enrollmentRef.current) {
            setVisibleSections(prev => ({ ...prev, enrollment: true }));
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (coursesRef.current) observer.observe(coursesRef.current);
    if (enrollmentRef.current) observer.observe(enrollmentRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Course data for easier mapping
  const courses = [
    {
      icon: <FaBook size={40} />,
      title: "Learn how to task and earn money in dollars",
      description: "Access comprehensive instruction materials and videos that show you how to task on different projects.",
      footer: <>Become a qualified tasker{' '}<a href="/auth/signinup" className="text-indigo-600 font-bold hover:underline">Register</a></>,
      bgColor: "bg-white"
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Using ChatGPT and DeepSeek",
      description: "Prompt Engineering: Learn how to write a perfect prompt to get good and safe content from LLMs and Transformers.",
      bgColor: "bg-indigo-200"
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Data Analysis and Data Analysis with AI",
      description: "Learn how to manipulate large datasets using tools like Excel, SQL, Python [Pandas & Numpy] and Power BI. On top of that, learn how to use AI to analyze and predict data starting with the most commonly used Machine Learning (ML) algorithms: Linear regression, Decision trees and Random forests and then upskilling by learning how to use finetuned LLM models, and deep learning frameworks to uncover patterns, trends, and insights efficiently.",
      bgColor: "bg-white"
    },
    {
      icon: <FaBrain size={40} />,
      title: "AI Fundamentals",
      description: "Learn the basics of Artificial Intelligence, including its applications, history, and ethical considerations.",
      bgColor: "bg-indigo-200"
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Machine Learning",
      description: "Dive into the world of supervised and unsupervised learning, and understand how machines learn from data.",
      bgColor: "bg-indigo-200"
    },
    {
      icon: <FaBrain size={40} />,
      title: "Deep Learning",
      description: "Explore neural networks, convolutional networks, and modern AI architectures used in computer vision and NLP.",
      bgColor: "bg-white"
    },
    {
      icon: <FaLanguage size={40} />,
      title: "Natural Language Processing (NLP)",
      description: "Understand how AI processes human language and builds applications like chatbots and speech recognition systems.",
      bgColor: "bg-indigo-200"
    },
    {
      icon: <FaBrain size={40} />,
      title: "AI Ethics & Responsible AI",
      description: "Explore the ethical implications of AI and how to develop responsible AI solutions that prioritize fairness and transparency.",
      bgColor: "bg-white"
    }
  ];

  return (
    <>
      {/* Header Section - Animate from top on load */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-12 rounded-lg shadow-lg mt-24 text-center transform transition-all duration-1000"
        style={{
          opacity: showInitialContent ? 1 : 0,
          transform: showInitialContent ? 'translateY(0)' : 'translateY(-30px)'
        }}
      >
        <h1 className="text-5xl font-extrabold">Online Learning Platform</h1>
        <p className="mt-4 text-xl">Access well organized knowledge to improve skills and increase income</p>
        <a 
          href="/auth/signinup" 
          className="mt-6 inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all"
          style={{
            opacity: showInitialContent ? 1 : 0,
            transform: showInitialContent ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          Join For Free
        </a>
      </div>

      {/* Courses Section - Animate from left on scroll */}
      <div 
        ref={coursesRef}
        className="mt-12 p-8 bg-gray-200 rounded-lg shadow-lg transform transition-all duration-1000"
        style={{
          opacity: visibleSections.courses ? 1 : 0,
          transform: visibleSections.courses ? 'translateX(0)' : 'translateX(-30px)'
        }}
      >
        <h2 
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          style={{
            opacity: visibleSections.courses ? 1 : 0,
            transform: visibleSections.courses ? 'translateY(0)' : 'translateY(-10px)',
            transitionDelay: '200ms',
            transitionDuration: '800ms'
          }}
        >
          Our Courses
        </h2>

        {/* Course Panels - Animate in sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`${course.bgColor} p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all`}
              style={{
                opacity: visibleSections.courses ? 1 : 0,
                transform: visibleSections.courses ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${300 + (index * 100)}ms`,
                transitionDuration: '600ms',
                transitionProperty: 'opacity, transform'
              }}
            >
              <div className="text-center text-blue-500 mb-4">
                {course.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{course.description}</p>
              {course.footer && (
                <p className="text-gray-700 font-semibold mt-2">
                  {course.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment Section - Animate from bottom on scroll */}
      <div 
        ref={enrollmentRef}
        className="mt-10 text-center transform transition-all duration-1000"
        style={{
          opacity: visibleSections.enrollment ? 1 : 0,
          transform: visibleSections.enrollment ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <a 
          href="/auth/signinup" 
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-xl hover:bg-indigo-700 transform hover:scale-105 transition"
          style={{
            transitionDelay: '200ms',
            transitionDuration: '800ms'
          }}
        >
          Register Now
        </a>
      </div>
    </>
  );
}