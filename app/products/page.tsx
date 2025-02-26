"use client";

import Image from "next/image";

export default function ProductsPage() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="mt-2 text-sm">
          Explore our cutting-edge AI-driven products in various industries.
        </p>
      </div>

      {/* ICT Section */}
      <div className="mt-6 bg-blue-300 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Information & Communication Technology</h2>
        <p className="mt-2 text-gray-600">
          We develop AI-powered solutions to enhance social media monitoring, sentiment analysis, and data security.
        </p>

        <div className="mt-6 flex flex-col md:flex-row md:items-center">
          <div className="relative h-40 w-40 mx-auto md:mx-0 md:mr-6 rounded-lg overflow-hidden">
            <Image src="/SocialMedia.png" alt="DeepScanAI Logo" layout="fill" objectFit="contain" />
          </div>
          <div className="mt-6 bg-red-300 p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">BrandVibe AI</h3>
            <p className="mt-2 text-gray-600">
              BrandVibe AI is an AI-powered sentiment analyzer that monitors social media user's views concerning a specific product
              or service. It uses a fine-tuned cardiffnlp/twitter-roberta-base language processing (NLP) model to classify comments and establish the users intent.
            </p>
            <a href="https://deepscanai.com" target="_blank" className="text-indigo-500 hover:underline mt-2 inline-block">
              Try BrandVibe AI
            </a>
          </div>
        </div>
      </div>

      {/* Agriculture Section */}
      <div className="mt-6 bg-green-400 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Agriculture</h2>
        <p className="mt-2 text-gray-600">
          We are working on AI-driven solutions to enhance farm productivity and animal health monitoring.
        </p>

        <div className="mt-6 flex flex-col md:flex-row md:items-center">
          <div className="relative h-40 w-40 mx-auto md:mx-0 md:mr-6 rounded-lg overflow-hidden">
            <Image src="/VetImage.png" alt="Animal Health Expert System" layout="fill" objectFit="contain" />
          </div>
          <div className="mt-6 bg-yellow-400 p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Animal Health Expert System (Under Development)</h3>
            <p className="mt-2 text-gray-600">
              Our AI-powered Animal Health Expert System will assist farmers and veterinarians in diagnosing livestock diseases
              and suggesting appropriate treatments. Using machine learning and expert knowledge, this system will help 
              improve animal welfare and boost productivity.
            </p>
            <span className="text-gray-500 mt-2 block">
              🚀 Expected Release: Q4 2025. Collaboration for this project is open for University/College 
              students passionate about AI. 
            </span>
          </div>
        </div>
      </div>

      {/* Future Products Section */}
      <div className="mt-6 bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming AI Innovations</h2>
        <p className="mt-2 text-gray-600">
          We are continuously developing AI-powered solutions across various industries, including Healthcare, Education, and Business Automation.
        </p>
        <p className="mt-2 text-gray-600">
          If you are interested in partnering with us to develop AI solutions, contact us at:
          <a href="mailto:Deepreal01@gmail.com" className="text-indigo-500 hover:underline ml-1">
            Deepreal01@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
