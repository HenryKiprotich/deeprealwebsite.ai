import { NextPage } from "next";

const ComingSoonPage: NextPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="text-center p-8 bg-white bg-opacity-20 rounded-lg shadow-2xl">
        <h1 className="text-5xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-xl mb-6">Curated datasets for AI development</p>
        <div className="flex justify-center">
          <img
            src="/lake.png"
            alt="Illustration indicating upcoming content"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default ComingSoonPage;
