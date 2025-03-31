"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaBrain,
  FaLaptopCode,
  FaChartLine,
  FaRobot,
  FaDatabase,
  FaCogs,
  FaServer,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaArrowRight,
  FaGem,
} from "react-icons/fa";

export default function HomePage() {
  // Animation states
  const [showInitialContent, setShowInitialContent] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    products: false,
    education: false,
    educationItems: false,
  });

  // Refs for scroll animations
  const productsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const educationItemsRef = useRef<HTMLDivElement>(null);

  // Items for grid layout section
  const productItems = [
    {
      src: "/AIData_analysis.png",
      alt: "AI Data Analytics",
      text: "AI powered data analytics: We optimize AI to analyze data for better decision making.",
    },
    {
      src: "/rag_fine_tuning.png",
      alt: "RAG vs Fine-Tuning",
      text: "RAG vs Fine-Tuning: Contact us, we streamline your business",
    },
    {
      src: "/do_not_misuseAI.png",
      alt: "AI Ethics",
      text: "AI ethical education: Partner with us to promote constructive use of AI in schools and colleges.",
    },
  ];

  // Items for education section
  const educationItems = [
    {
      src: "/remotasks.png",
      alt: "Remotasks logo",
      text: "Remotasks: Access accounts, experienced AI taskers and account managers",
    },
    {
      src: "/learningAI.png",
      alt: "Deep Learning",
      text: "Deep Real Academy: Enroll, learn a skill and earn money.",
      button: {
        label: "Visit DeepReal Academy",
        href: "/academyinfo",
      },
    },
    {
      src: "/data_annotation.png",
      alt: "Machine Learning",
      text: "Data Annotation: Get accounts, experienced data annotators and account managers",
    },
  ];

  // Set up animations
  useEffect(() => {
    // Trigger initial animations
    setTimeout(() => {
      setShowInitialContent(true);
    }, 100);

    // Setup intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (entry.target === productsRef.current) {
            setVisibleSections((prev) => ({ ...prev, products: true }));
          } else if (entry.target === educationRef.current) {
            setVisibleSections((prev) => ({ ...prev, education: true }));
          } else if (entry.target === educationItemsRef.current) {
            setVisibleSections((prev) => ({ ...prev, educationItems: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (productsRef.current) observer.observe(productsRef.current);
    if (educationRef.current) observer.observe(educationRef.current);
    if (educationItemsRef.current) observer.observe(educationItemsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`mt-24 text-center mb-1 transform transition-all duration-1000 ease-out 
                   relative bg-cover bg-center
                   ${
                     showInitialContent
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 -translate-y-10"
                   }`}
        style={{ backgroundImage: 'url("/binary.png")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 py-12 px-4">
          <h1 className="text-xl text-white md:text-3xl font-extrabold mb-4">
            Welcome to DeepReal<span className="text-sm align-super">AI</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-indigo-200 mb-6">
            At DeepReal <span className="text-sm align-super">AI</span>, we help
            businesses harness the power of AI and data to drive growth,
            efficiency, and innovation. Whether you are looking to enhance
            decision-making, optimize operations, or scale with AI, we got you
            covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
            <div
              className={`bg-indigo-800 bg-opacity-40 p-3 rounded-lg flex items-start hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer
                          ${
                            showInitialContent
                              ? "opacity-100 translate-x-0 delay-200"
                              : "opacity-0 -translate-x-10"
                          }`}
            >
              <div className="text-green-400 mr-3 shrink-0 mt-1 group-hover:text-green-300">
                <FaRobot size={18} />
              </div>
              <span className="text-white text-sm md:text-base">
                AI-Powered Business Applications – Custom-built AI solutions
                tailored to your needs
              </span>
            </div>

            <div
              className={`bg-indigo-800 bg-opacity-40 p-3 rounded-lg flex items-start hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer
                          ${
                            showInitialContent
                              ? "opacity-100 translate-x-0 delay-300"
                              : "opacity-0 translate-x-10"
                          }`}
            >
              <div className="text-green-400 mr-3 shrink-0 mt-1 group-hover:text-green-300">
                <FaChartLine size={18} />
              </div>
              <span className="text-white text-sm md:text-base">
                Advanced Analytics & Insights – Turn your data into actionable
                strategies
              </span>
            </div>

            <div
              className={`bg-indigo-800 bg-opacity-40 p-3 rounded-lg flex items-start hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer
                          ${
                            showInitialContent
                              ? "opacity-100 translate-x-0 delay-400"
                              : "opacity-0 -translate-x-10"
                          }`}
            >
              <div className="text-green-400 mr-3 shrink-0 mt-1 group-hover:text-green-300">
                <FaCogs size={18} />
              </div>
              <span className="text-white text-sm md:text-base">
                AI Model Fine-Tuning & Development – Optimize AI for better
                performance
              </span>
            </div>

            <div
              className={`bg-indigo-800 bg-opacity-40 p-3 rounded-lg flex items-start hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer
                          ${
                            showInitialContent
                              ? "opacity-100 translate-x-0 delay-500"
                              : "opacity-0 translate-x-10"
                          }`}
            >
              <div className="text-green-400 mr-3 shrink-0 mt-1 group-hover:text-green-300">
                <FaGraduationCap size={18} />
              </div>
              <span className="text-white text-sm md:text-base">
                AI Education & Training – Equip your team with cutting-edge AI
                skills
              </span>
            </div>
          </div>
        </div>{" "}
        {/* This is the closing tag for the "relative z-10 py-12 px-4" div */}
      </header>

      {/* Main Content Section */}
      <div>
        {/* Grid Layout Section - 3 items per row - Animate from left */}
        <div
          ref={productsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000
                      ${
                        visibleSections.products
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-20"
                      }`}
        >
          {productItems.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b from-indigo-800 to-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300
                         ${
                           visibleSections.products
                             ? "opacity-100 translate-y-0"
                             : "opacity-0 translate-y-10"
                         }`}
              style={{
                transitionDelay: visibleSections.products
                  ? `${200 + index * 100}ms`
                  : "0ms",
                transitionProperty: "opacity, transform",
              }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-bold text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Attraction Section - Animate from right */}
        <div
          ref={educationRef}
          className={`mt-6 mb-1 bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl shadow-2xl overflow-hidden
                      transform transition-all duration-1000
                      ${
                        visibleSections.education
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-20"
                      }`}
        >
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-2xl font-bold text-white mb-4 text-center">
              Empower Your Future with AI – Train Smarter, Earn Faster!{" "}
              <FaRocket className="inline-block ml-1" />
            </h2>

            <p className="text-center text-indigo-200 text-lg mb-4 max-w-2xl mx-auto">
              Are you ready to step into the world of AI and unlock endless
              opportunities? At DeepReal AI, we don&apos;t just give you access
              to AI training and data annotation accounts—we equip you with the
              skills to thrive!
            </p>

            {/* Update the education section panels with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto mb-4">
              <div
                className={`bg-blue-900 bg-opacity-40 p-4 rounded-lg flex items-start hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                style={{
                  opacity: visibleSections.education ? 1 : 0,
                  transform: visibleSections.education
                    ? "translateY(0)"
                    : "translateY(10px)",
                  transitionDelay: "300ms",
                  transitionProperty: "opacity, transform",
                }}
              >
                <div className="text-green-400 mr-3 mt-1 group-hover:text-green-300">
                  <FaServer size={18} />
                </div>
                <span className="text-white">
                  Get Exclusive Access to Top AI Training Platforms
                </span>
              </div>

              <div
                className={`bg-blue-900 bg-opacity-40 p-4 rounded-lg flex items-start hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                style={{
                  opacity: visibleSections.education ? 1 : 0,
                  transform: visibleSections.education
                    ? "translateY(0)"
                    : "translateY(10px)",
                  transitionDelay: "400ms",
                  transitionProperty: "opacity, transform",
                }}
              >
                <div className="text-green-400 mr-3 mt-1 group-hover:text-green-300">
                  <FaDatabase size={18} />
                </div>
                <span className="text-white">
                  Master Data Annotation with Hands-On Training
                </span>
              </div>

              <div
                className={`bg-blue-900 bg-opacity-40 p-4 rounded-lg flex items-start hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                style={{
                  opacity: visibleSections.education ? 1 : 0,
                  transform: visibleSections.education
                    ? "translateY(0)"
                    : "translateY(10px)",
                  transitionDelay: "500ms",
                  transitionProperty: "opacity, transform",
                }}
              >
                <div className="text-green-400 mr-3 mt-1 group-hover:text-green-300">
                  <FaBrain size={18} />
                </div>
                <span className="text-white">
                  Learn to Train AI Models Like a Pro
                </span>
              </div>

              <div
                className={`bg-blue-900 bg-opacity-40 p-4 rounded-lg flex items-start hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                style={{
                  opacity: visibleSections.education ? 1 : 0,
                  transform: visibleSections.education
                    ? "translateY(0)"
                    : "translateY(10px)",
                  transitionDelay: "600ms",
                  transitionProperty: "opacity, transform",
                }}
              >
                <div className="text-green-400 mr-3 mt-1 group-hover:text-green-300">
                  <FaGlobe size={18} />
                </div>
                <span className="text-white">
                  Work from Anywhere & Get Paid for Your AI Expertise
                </span>
              </div>
            </div>

            <p className="text-center text-indigo-200 text-lg mb-4 max-w-2xl mx-auto">
              Whether you're a beginner or looking to level up, our
              expert-guided training ensures you become an AI annotation
              specialist, boost your income, and stay ahead in the AI
              revolution.
            </p>

            <div
              className="text-center"
              style={{
                opacity: visibleSections.education ? 1 : 0,
                transform: visibleSections.education
                  ? "translateY(0)"
                  : "translateY(10px)",
                transitionDelay: "700ms",
                transitionDuration: "700ms",
                transitionProperty: "opacity, transform",
              }}
            >
              <a
                href="/auth/signinup"
                className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-lg text-white text-xl font-bold shadow-lg transform hover:scale-105 transition"
              >
                <FaArrowRight className="inline-block mr-2" /> Sign Up Today &
                Start Your AI Journey!{" "}
                <FaRocket className="inline-block ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Education Products Section - Animate from bottom */}
        <div
          ref={educationItemsRef}
          className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000
                      ${
                        visibleSections.educationItems
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-20"
                      }`}
        >
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-800 to-indigo-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
              style={{
                opacity: visibleSections.educationItems ? 1 : 0,
                transform: visibleSections.educationItems
                  ? "translateY(0)"
                  : "translateY(10px)",
                transitionDelay: `${200 + index * 100}ms`,
                transitionProperty: "opacity, transform",
              }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-bold text-white">{item.text}</p>
                {item.button && (
                  <a
                    href={item.button.href}
                    className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                  >
                    {item.button.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
