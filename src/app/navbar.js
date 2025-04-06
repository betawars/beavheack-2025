// components/Navbar.js
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  const [session, setSession] = useState(false)
  const [rideDetails,setRideDetails] = useState(false)

  useEffect(() => {
    const storedSession = sessionStorage.getItem("isActive");
    const storedRideDetails = sessionStorage.getItem("ride_details")
    setRideDetails(storedRideDetails)
    if (storedSession) {
      setSession(true)
    }
    console.log(rideDetails,session)
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    sessionStorage.setItem("isActive", "")
    window.location.reload()
  }

  const handleRideClick = () =>{

  }

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="container mx-auto flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
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
          {rideDetails & session?
            <span onClick={handleRideClick}>{rideDetails.content} is ongoing</span>
          :""}
          <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            About
          </Link>
          {session ? <button onClick={onLogout} className='bg-[#4880d2] hover:bg-[#69a5ef] text-white font-sans text-[15px] px-5 py-2 rounded-[28px] border border-[#4292f5] shadow-sm hover:shadow-md active:relative active:top-px'>Logout</button>

            : <Link href="/signup" className="bg-[#4880d2] hover:bg-[#69a5ef] text-white font-sans text-[15px] px-5 py-2 rounded-[28px] border border-[#4292f5] shadow-sm hover:shadow-md active:relative active:top-px">
              Signup
            </Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
