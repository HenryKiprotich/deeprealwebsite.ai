"use client";

import { useState } from 'react';

export default function AIResearchPage() {
  const [articles] = useState([
    {
      title: "The potential application of artificial intelligence in veterinary clinical practice and biomedical research",
      description: "Exploring how artificial intelligence can enhance clinical practice and biomedical research.",
      fileUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10864457/pdf/fvets-11-1347550.pdf",
    },
    {
      title: "Ethical Challenges and Solutions of Generative AI: An Interdisciplinary Perspective",
      description: "A deep dive into ethical considerations in GenAI development and deployment.",
      fileUrl: "https://www.mdpi.com/2227-9709/11/3/58",
    },
  ]);

  return (
    <>
      {/* Header */}
      <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg mt-24">
        <h1 className="text-3xl font-bold">AI Research Articles</h1>
        <p className="mt-2 text-sm">Browse and explore the latest AI research papers.</p>
      </div>

      {/* Research Articles Section */}
      <div className="mt-6 bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Latest Articles</h2>
        
        <ul className="mt-4 space-y-4">
          {articles.map((article, index) => (
            <li key={index} className="p-4 bg-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
              <a
                href={article.fileUrl}
                target="_blank"
                className="text-indigo-500 hover:underline mt-2 inline-block"
              >
                Read Article
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
