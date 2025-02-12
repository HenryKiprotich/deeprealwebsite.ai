'use client';

import Image from 'next/image';

export default function DataAnalysisCourses() {
  const courses = [
    {
      title: "Python for Data Analysis",
      description: "Master Python programming for data analysis and visualization.",
      logo: "/logos/python.png",
      link: "#"
    },
    {
      title: "SQL for Data Analysis",
      description: "Learn how to manage and query databases using SQL.",
      logo: "/logos/sql.png",
      link: "#"
    },
    {
      title: "Excel for Data Analysis",
      description: "Leverage Excel for advanced data analysis and reporting.",
      logo: "/logos/excel.png",
      link: "#"
    },
    {
      title: "SPSS for Statistical Analysis",
      description: "Use SPSS for statistical modeling and hypothesis testing.",
      logo: "/logos/spss.png",
      link: "#"
    },
    {
      title: "Power BI for Business Intelligence",
      description: "Create stunning dashboards and reports with Power BI.",
      logo: "/logos/powerbi.png",
      link: "#"
    },
    {
      title: "Time Series with Linear Regression",
      description: "Analyze time series data using linear regression models.",
      logo: "/logos/timeseries.png",
      link: "https://www.kaggle.com/code/ryanholbrook/linear-regression-with-time-series",
      external: true
    },
    {
      title: "Random Forests & Decision Trees",
      description: "Learn machine learning for structured data with tree-based models.",
      logo: "/logos/randomforests.png",
      link: "https://www.kaggle.com/",
      external: true
    },
    {
      title: "Deep Learning for Data Analysis",
      description: "Use AI models like neural networks for advanced data analysis.",
      logo: "/logos/deeplearning.png",
      link: "https://learn.deeplearning.ai/",
      external: true
    }
  ];

  return (
    <main className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Data Analysis Courses</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Explore top courses to master data analysis skills.
          </p>
        </div>

        {/* Single Column Courses List */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex items-center space-x-4">
              {/* Course Logo */}
              <div className="w-16 h-16 flex-shrink-0">
                <Image src={course.logo} alt={course.title} width={64} height={64} className="rounded-md" />
              </div>

              {/* Course Details */}
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{course.description}</p>

                {/* Course Link */}
                <a 
                  href={course.link} 
                  target={course.external ? "_blank" : "_self"}
                  className="mt-3 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  {course.external ? (course.title.includes("Deep Learning") ? "Go to Deep Learning AI" : "Go to Kaggle") : "Start Learning"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
