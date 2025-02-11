"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for toggling

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false); // Independent toggle state

  // 🔹 Define navigation links
  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Settings", path: "/dashboard/settings" },
    { name: "Log Out", path: "/" },
  ];

  return (
    <>
      {/* 🔹 Mobile: Hamburger Button */}
      <button
        className="md:hidden p-2 fixed top-4 left-4 z-50 bg-gray-700 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* 🔹 Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-700 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:relative md:translate-x-0 md:w-64 p-4 transition-transform duration-300 z-50`}
      >
        {/* 🔹 Mobile: Close Button */}
        <button
          className="md:hidden p-2 mb-4 bg-red-500 text-white rounded"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={28} />
        </button>

        {/* 🔹 Logo */}
        <div className="p-4 flex justify-start">
          <Image src="/DeepRealLogo.png" alt="Logo" width={48} height={48} />
        </div>

        {/* 🔹 Navigation Links */}
        <ul className="mt-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="block p-2 hover:bg-blue-600 rounded"
                onClick={() => setIsOpen(false)} // Close sidebar when link clicked (mobile)
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 Mobile Overlay (Click to Close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
