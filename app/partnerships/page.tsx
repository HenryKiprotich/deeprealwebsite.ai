'use client';

import Image from 'next/image';

export default function PartnershipsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg mt-24">
        <h1 className="text-3xl font-bold">Our Partnerships</h1>
        <p className="mt-2 text-sm">
          Deep Real collaborates with industry leaders to advance AI-driven solutions.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mt-6 bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Our Collaborations</h2>
        <p className="mt-2 text-gray-600">
          At Deep Real, we believe in the power of collaboration. By partnering with leading companies and institutions, 
          we ensure that our AI innovations contribute to real-world business solutions.
        </p>
      </div>

      {/* Apex Minds Partnership */}
      <div className="mt-6 bg-indigo-500 p-6 shadow rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="h-32 w-32 mx-auto md:mx-0 md:mr-6">
            <Image 
              src="/ApexMindsLogo.png" 
              alt="Apex Minds Logo" 
              width={128} 
              height={128} 
              className="rounded-lg object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Apex Minds</h2>
            <p className="mt-2 text-white">
              Apex Minds specializes in building web applications, mobile applications, and ERP solutions. 
              Their expertise in software development enables businesses to scale efficiently.
            </p>
            <p className="mt-2 text-white">
              Through our partnership, Apex Minds helps Deep Real integrate AI technologies into these business-oriented solutions, 
              ensuring that enterprises leverage AI-driven automation and insights.
            </p>
            <a 
              href="https://apexminds.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-500 hover:underline mt-2 inline-block"
            >
              Learn more about Apex Minds
            </a>
          </div>
        </div>
      </div>

      {/* Future Collaborations Section */}
      <div className="mt-6 bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Expanding Our Network</h2>
        <p className="mt-2 text-gray-600">
          We are actively seeking more collaborations with tech companies, learning and research institutions,
          and AI-driven startups to enhance the capabilities of AI in business and education.
        </p>
        <p className="mt-2 text-gray-600">
          If your organization is interested in working with us, reach out at:
          <a href="mailto:Deepreal01@gmail.com" className="text-indigo-500 hover:underline ml-1">
            Deepreal01@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}