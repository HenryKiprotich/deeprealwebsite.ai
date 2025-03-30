'use client';

import { FaBook, FaChalkboardTeacher, FaChartLine, FaBrain, FaLaptopCode, FaLanguage } from 'react-icons/fa';

export default function AcademyInfoPage() {
  return (
    <>
      {/* Header Section */}
      <div className="text-white p-12 rounded-lg shadow-lg mt-24 text-center">
        <h1 className="text-5xl font-extrabold">Online Learning Platform</h1>
        <p className="mt-4 text-xl">Access well organized knowledge to improve skills and increase income</p>
        <a href="/auth/signinup" className="mt-6 inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600">
          Join For Free
        </a>
      </div>

      {/* Courses Section */}
      <div className="mt-12 p-8 bg-gray-200 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Courses</h2>

        {/* Course Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Course 1: Learn how to task and earn money in dollars */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaBook size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Learn how to task and earn money in dollars</h3>
            <p className="text-sm text-gray-600 mt-2">Access comprehensive instruction materials and videos that show you how to task on different projects.</p>
            <p className="text-gray-700 font-semibold mt-2">
              Become a qualified tasker{' '}
              <a href="/auth/signinup" className="text-indigo-600 font-bold hover:underline">
                Register
              </a>
            </p>
          </div>

          {/* Course 2: Using ChatGPT and DeepSeek */}
          <div className="bg-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaChalkboardTeacher size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Using ChatGPT and DeepSeek</h3>
            <p className="text-sm text-gray-600 mt-2">Prompt Engineering: Learn how to write a perfect prompt to get good and safe content from LLMs and Transformers.</p>
          </div>

          {/* Course 3: Data Analysis and Data Analysis with AI */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaChartLine size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Data Analysis and Data Analysis with AI</h3>

            <div>              
              <p className="text-sm text-gray-600 mt-2 p-2 rounded-md"> 
                Learn how to manipulate large datasets using tools like Excel, SQL, Python [Pandas & Numpy] and Power BI.           
                On top of that, learn how to use AI to analyze and predict data starting with the most commonly used Machine Learning (ML) algorithms: Linear regression, Decision trees 
                and Random forests and then upskilling by learning how to use finetuned LLM models, and deep learning 
                frameworks to uncover patterns, trends, and insights efficiently.
              </p>
            </div>            
          </div>

          {/* Course 4: AI Fundamentals */}
          <div className="bg-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaBrain size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">AI Fundamentals</h3>
            <p className="text-sm text-gray-600 mt-2">Learn the basics of Artificial Intelligence, including its applications, history, and ethical considerations.</p>
          </div>

          {/* Course 5: Machine Learning */}
          <div className="bg-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaLaptopCode size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Machine Learning</h3>
            <p className="text-sm text-gray-600 mt-2">Dive into the world of supervised and unsupervised learning, and understand how machines learn from data.</p>
          </div>

          {/* Course 6: Deep Learning */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaBrain size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Deep Learning</h3>
            <p className="text-sm text-gray-600 mt-2">Explore neural networks, convolutional networks, and modern AI architectures used in computer vision and NLP.</p>
          </div>

          {/* Course 7: Natural Language Processing (NLP) */}
          <div className="bg-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaLanguage size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Natural Language Processing (NLP)</h3>
            <p className="text-sm text-gray-600 mt-2">Understand how AI processes human language and builds applications like chatbots and speech recognition systems.</p>
          </div>

          {/* Course 8: AI Ethics & Responsible AI */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="text-center text-blue-500 mb-4">
              <FaBrain size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">AI Ethics & Responsible AI</h3>
            <p className="text-sm text-gray-600 mt-2">Explore the ethical implications of AI and how to develop responsible AI solutions that prioritize fairness and transparency.</p>
          </div>           
        </div>
      </div>

      {/* Enrollment Section */}
      <div className="mt-10 text-center">
        <a 
          href="/auth/signinup" 
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-xl hover:bg-indigo-700 transform hover:scale-105 transition"
        >
          Register Now
        </a>
      </div>
    </>
  );
}
