"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function TopNavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 p-3 z-50">
      <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-r from-indigo-700 to-gray-800 rounded-lg shadow-2xl border-0">
        {/* 🔹 Burger Menu Button (Visible on Small Screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Header Section */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">          
            <Image
              src="/DeepRealLogo.png"
              alt="Deep Real Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>           
          <h1 className="text-xl font-bold ml-2 text-white">DeepReal<span className="text-sm align-super">AI</span></h1>           
        </div>

        {/* 🔹 Navigation Links */}
        <ul
          className={`md:flex space-x-4 ml-auto transition-all duration-300 ease-in-out text-white
          ${
            isOpen
              ? "block absolute top-14 left-0 w-full bg-gradient-to-r from-indigo-700 to-gray-800 p-4 text-center z-50 rounded-lg shadow-lg"
              : "hidden md:flex"
          }`}
        >
          <li className="md:inline-block py-1">
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="md:inline-block py-1">
            <Link
              href="/products"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>

          <li className="md:inline-block py-1">
            <Link
              href="/partnerships"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Partnerships
            </Link>
          </li>

          <li className="md:inline-block py-1">
            <Link
              href="/about"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>

          <li className="md:inline-block py-1">
            <Link
              href="/academyinfo"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Academy
            </Link>
          </li>
          <li className="md:inline-block py-1">
            <Link
              href="/research"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
          </li>
          <li className="md:inline-block py-1">
            <Link
              href="/datalake"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Data
            </Link>
          </li>
          <li className="md:inline-block py-1">
            <Link
              href="/hardware"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Hardware
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}