"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center w-full h-[100px]">
      <div
        className="flex items-center p-4 justify-between top-5 border rounded-full bg-transparent shadow-lg bg-white bg-opacity-30 backdrop-blur-md w-full max-w-[853px] h-[69px] fixed"
      >
        <div>
          <Image src="/images/logo-1.webp" width={220} height={61} />
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="4" fill="black"></rect>
            <rect y="13" width="30" height="4" fill="black"></rect>
            <rect y="26" width="30" height="4" fill="black"></rect>
          </svg>
        </button>
        <ul className={`hidden md:flex gap-4 text-gray-400`}>
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">EDventure</li>
          <li className="hover:text-black cursor-pointer">Demo</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
          <li className="hover:text-black cursor-pointer">Shop</li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 right-0 w-48 bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start p-4 text-gray-400">
            <li className="w-full text-left hover:text-black cursor-pointer py-2">Home</li>
            <li className="w-full text-left hover:text-black cursor-pointer py-2">EDventure</li>
            <li className="w-full text-left hover:text-black cursor-pointer py-2">Demo</li>
            <li className="w-full text-left hover:text-black cursor-pointer py-2">Contact</li>
            <li className="w-full text-left hover:text-black cursor-pointer py-2">Shop</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
