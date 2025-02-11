import React from 'react';
import { FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        
        {/* Social Media Links - Top Left */}
        <div className="w-full flex justify-start space-x-4">
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-white hover:text-gray-400 transition duration-300" size={20} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-gray-400 transition duration-300" size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-400 transition duration-300" size={20} />
          </a>
        </div>

        {/* Contact Information - Center Top */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            <span className="font-medium">Email Address:</span> 
            <a href="mailto:Deepreal01@gmail.com" className="text-blue-400 hover:text-blue-500 transition duration-300 ml-1">
              Deepreal01@gmail.com
            </a>
          </p>
          <p className="text-sm md:text-base text-gray-300">
            <span className="font-medium">Phone No:</span> +254 727 577 080
          </p>
          <p className="text-xs md:text-sm text-gray-300">
            <span className="font-medium">Address:</span> P.O BOX 00232-00100, RUIRU, THIKA ROAD, KENYA
          </p>
        </div>

        {/* Copyright - Bottom */}
        <div className="w-full text-center mt-4">
          <p className="text-xs md:text-sm font-light opacity-80">
            &copy; {new Date().getFullYear()} Deep Real Inc. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
