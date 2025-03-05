'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for burger & close button

export default function TopNavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* 🔹 Burger Menu Button (Visible on Small Screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle Menu Icon */}
        </button>

        {/* 🔹 Navigation Links */}
        <ul className={`md:flex space-x-6 ml-auto transition-all duration-300 ease-in-out 
          ${isOpen ? 'block absolute top-16 left-0 w-full bg-gray-700 p-4 text-center' : 'hidden md:flex'}`}
        >
          <li className="md:inline-block py-2">
            <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
                    
          <li className="md:inline-block py-2">
            <Link href="/products" className="hover:underline" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>

          <li className="md:inline-block py-2">
            <Link href="/partnerships" className="hover:underline" onClick={() => setIsOpen(false)}>
              Partnerships
            </Link>
          </li>

          <li className="md:inline-block py-2">
            <Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          
          <li className="md:inline-block py-2">
            <Link href="/academyinfo" className="hover:underline" onClick={() => setIsOpen(false)}>
              Deep Real Academy
            </Link>
          </li>
          <li className="md:inline-block py-2">
            <Link href="/research" className="hover:underline" onClick={() => setIsOpen(false)}>
              AI Research
            </Link>
          </li>
          <li className="md:inline-block py-2">
            <Link href="/datalake" className="hover:underline" onClick={() => setIsOpen(false)}>
              Data Lake
            </Link>
          </li>
          <li className="md:inline-block py-2">
            <Link href="/hardware" className="hover:underline" onClick={() => setIsOpen(false)}>
              Hardware
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
