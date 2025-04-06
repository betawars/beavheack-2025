// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png'
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="container mx-auto flex items-center">
          <div className="text-white text-xl font-bold">
            <Image
              src={logo} 
              alt="Logo"
              width={50}            
              height={50}            
            />
          </div>
          <div className="text-white text-xl font-bold">
            <Link href="/">UniRide</Link>
          </div>
        </div>
        
        <button 
          onClick={toggleMenu} 
          className="lg:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}
        >
          <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            About
          </Link>
          <Link href="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Services
          </Link>
          <Link href="/signup" className="signup">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
