'use client';

export default function AcademyInfoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg text-center overflow-hidden relative">
        <div className="animate-marquee inline-block whitespace-nowrap">
          <h1 className="text-lg font-bold"> Welcome to Deep Real Academy </h1>
        </div>
          <p className="text-sm mt-2">Explore our courses and start your journey today!</p>
      </div>

      {/* Courses Information */}
      <main className="flex-grow p-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Courses</h2>
        <div className="mt-4 space-y-6">

          {/* Grid wrapper for two-column layout */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">        

            {/* Course 1 */}
            <div className="bg-lime-300 p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Learn how to task and earn money in dollars</h3>
              <p className="text-sm text-gray-600 mt-2">
                Access comprehesive instruction materials and videos that show you how to task on different projects.
              </p>
              <p className="text-gray-700 font-semibold mt-2">
                Become a qualified tasker{' '}
                <a href="/auth/signup" className="text-indigo-600 font-bold hover:underline">
                  Sign Up
                </a>
              </p>
            </div>

            {/* Course 2 */}
            <div className="bg-indigo-200 p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Using ChatGPT and DeepSeek</h3>
              <p className="text-sm text-gray-600 mt-2">
                Prompt Engineering: Learn how to write a perfect prompt to get good and safe content from LLMs and Transformers.
              </p>
            </div>

            {/* Course 3 */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Data Analysis and Data Analysis with AI</h3>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">Data Analysis:</h3>
                <p className="text-sm bg-indigo-100 text-gray-600 mt-2"> 
                  This course introduces fundamental data analysis techniques, including data cleaning,
                  analysis, visualization, and statistical methods to extract insights from raw data. You will learn how to
                  work with datasets using tools like Excel, SQL, Python [Pandas & Numpy] and Power BI to make informed decisions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">Data Analysis with AI:</h3>
                <p className="text-sm bg-lime-300 text-gray-600 mt-2">
                  This advanced course explores how artificial intelligence enhances data analysis through machine 
                  learning, automation, and predictive modeling. You will learn how to use AI to analyze and predict data
                  starting with the most commonly used Machine Learning (ML) algorithms: Linear regression, Decision trees 
                  and Random forests and then upskilling by learning how to use finetuned LLM models, and deep learning 
                  frameworks to uncover patterns, trends, and insights efficiently.
                </p>
              </div>            
            </div>

            {/* Course 4 */}
            <div className="bg-indigo-200 p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">AI Fundamentals</h3>
              <p className="text-sm text-gray-600 mt-2">
                Learn the basics of Artificial Intelligence, including its applications, history, and ethical considerations.
              </p>
            </div>

            {/* Course 5 */}
            <div className="bg-indigo-200 p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Machine Learning</h3>
              <p className="text-sm text-gray-600 mt-2">
                Dive into the world of supervised and unsupervised learning, and understand how machines learn from data.
              </p>
            </div>

            {/* Course 6 */}
            <div className="bg-lime-300 p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Deep Learning</h3>
              <p className="text-sm text-gray-600 mt-2">
                Explore neural networks, convolutional networks, and modern AI architectures used in computer vision and NLP.
              </p>
            </div>

            {/* Course 7 */}
            <div className="bg-lime-300 p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Natural Language Processing (NLP)</h3>
              <p className="text-sm text-gray-600 mt-2">
                Understand how AI processes human language and builds applications like chatbots and speech recognition.
              </p>
            </div>

            {/* Course 8 */}
            <div className="bg-indigo-200 p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">AI Ethics & Responsible AI</h3>
              <p className="text-sm text-gray-600 mt-2">
                Explore the ethical implications of AI and how to develop responsible AI solutions that prioritize
                fairness and transparency. 
              </p>
            </div>           

          </div>        

          {/* Enrollment Section */}
          <div className="mt-10 text-center">
            <p className="text-gray-700 font-semibold">
              Enrolled?{' '}
              <a href="/auth/signin" className="text-indigo-600 font-bold hover:underline">
                Sign In
              </a>
            </p>
            <p className="text-gray-700 font-semibold mt-2">
              Not Enrolled?{' '}
              <a href="/auth/signup" className="text-indigo-600 font-bold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div> {/* End of Grid Wrapper */}
      </main>
    </div>
  );
}
