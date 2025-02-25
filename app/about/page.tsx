'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-2 text-sm">Learn more about Deep Real and our mission.</p>
      </div>

      {/* Who We Are Section */}
      <div className="mt-6 bg-gray-600 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
        <p className="mt-2 text-white">
          Deep Real Inc. is a startup dedicated to providing cutting-edge Artificial Intelligence (AI) solutions.
          Our company is committed to transforming businesses, individuals, and communities through AI. 
          Our expertise spans across AI research, development, education, and strategic implementation,
          making AI accessible, ethical, and transformative. Our collaboration with Apex Minds, a leader 
          in web, mobile, and ERP solutions, enables us to deliver seamless AI-powered platforms, ensuring 
          businesses stay ahead in the digital revolution.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mt-6 bg-indigo-200 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">🚀 Our Mission</h2>
        <p className="mt-2 text-gray-600">
          To revolutionize industries through artificial intelligence, making AI accessible,
          ethical, and impactful for businesses, individuals, and communities. We strive to:
        </p>
        <ul className="mt-2 text-gray-600 list-inside">
          <li>🛠️ Develop world-class AI solutions tailored to industry needs.</li>
          <li>🎓 Empower organizations and individuals with AI education and training.</li>
          <li>🔬 Advance AI research and ethics to ensure responsible and fair AI applications.</li>
        </ul>
      </div>

      {/* Our Vision Section */}
      <div className="mt-6 bg-gray-600 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">🌟 Our Vision</h2>
        <p className="mt-2 text-white">
          At Deep Real, we aim to transform the world through innovative, ethical, and sustainable AI solutions 
          that empower individuals, businesses, and communities to thrive in the digital era.
        </p>
        <ul className="mt-2 text-white list-inside">
          <li>🌉 AI is a tool for progress, bridging gaps and creating opportunities.</li>
          <li>🏢 Businesses leverage AI seamlessly to enhance decision-making and efficiency.</li>
          <li>📚 AI education is accessible, equipping future leaders with essential skills.</li>
          <li>⚖️ Ethical AI practices shape the development of responsible and unbiased AI systems.</li>
        </ul>
      </div>

      {/* Our Core Values Section */}
      <div className="mt-6 bg-indigo-200 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">💡 Our Core Values</h2>
        <ul className="mt-2 text-gray-600 list-inside">
          <li>🤝 Client-Centric Approach – We tailor our AI solutions to meet the specific needs of businesses and individuals.</li>
          <li>🚀 Innovation – We push the boundaries of AI to deliver state-of-the-art solutions.</li>
          <li>🎓 Education & Empowerment – We provide knowledge, mentorship, and training to build AI expertise.</li>          
          <li>🤝 Collaboration – We partner with industry leaders to drive AI adoption and transformation.</li>
          <li>⚖️ Ethics & Transparency – We uphold fairness, accountability, and compliance in AI applications.</li>          
          <li>🏆 Quality & Excellence – We maintain the highest standards in AI development, research, and deployment.</li>
        </ul>
      </div>

      {/* Meet the Founders - (SECOND LAST SECTION) */}
      <div className="mt-6 bg-indigo-500 p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Meet Our Founders</h2>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Founder 1 */}
          <div className="text-center">
            <div className="w-40 h-40 mx-auto">
              <Image src="/CEO.png" alt="Founder 1" width={160} height={160} className="rounded-full object-cover" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">Henry Kiprotich</h3>
            <p className="text-white text-sm">CEO, Data & AI Solutions Engineer</p>
          </div>

          {/* Founder 2 */}
          <div className="text-center">
            <div className="w-40 h-40 mx-auto">
              <Image 
                src="/FaithAvatar.png"
                alt="Founder 2"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-800">Faith Wairimu</h3>
            <p className="text-white text-sm">CTO & Machine Learning Engineer</p>
          </div>

          {/* Founder 3 */}
          <div className="text-center">
            <div className="w-40 h-40 mx-auto">
              <Image 
                src="/GodfreyAvatar.png"
                alt="Founder 3"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-800">Godfrey Macharia</h3>
            <p className="text-white text-sm">COO & AI Strategist</p>
          </div>
        </div>
      </div>
    </main>
  );
}
