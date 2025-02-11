"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  // Load theme from local storage or default to light
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") === "dark" : false
  );

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  // Effect to apply theme on load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span className="text-lg">Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`w-14 h-7 flex items-center rounded-full p-1 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                darkMode ? "translate-x-7" : "translate-x-0"
              } transition`}
            ></div>
          </button>
        </div>

        {/* //Additional Settings 
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Other Settings</h3>
          <div className="py-3 border-b border-gray-300 dark:border-gray-700">
            <span className="text-lg">Enable Notifications</span>
            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Enable
            </button>
          </div>
          <div className="py-3 border-b border-gray-300 dark:border-gray-700">
            <span className="text-lg">Change Password</span>
            <button className="ml-4 p-2 bg-red-500 text-white rounded hover:bg-red-600">
              Change
            </button>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
