"use client";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/Images/flag-logo.png';
import "./Navbar.css";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

  export default function Navbar() {
    const [isClick, setisClick] = useState(false);
    const toggleNavBar = () => {
      setisClick(!isClick);
    }
    return (
      <nav className="navbar-item bg-black sticky top-0 z-50">
        <div className="max-w-9xl px-4 sm:px-6 lg-px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex shrink-0">
                <Link href="/" className="logo">
                <Image alt="logo" src={logo} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-4 space-x-4">
                <Link href="#home" className="link text-white hover:text-black hover:bg-white rounded-lg p-2">
                  HOME
                </Link>
                <Link href="#about-us" className="link text-white hover:text-black hover:bg-white rounded-lg p-2">
                  ABOUT US
                </Link>
                <Link href="#know-god" className="link text-white hover:text-black hover:bg-white rounded-lg p-2">
                  KNOW GOD
                </Link>
                <Link href="#donate-us" className="link text-white hover:text-black hover:bg-white rounded-lg p-2">
                  DONATE US
                </Link>
                <Link href="#contact-us" className="link text-white hover:text-black hover:bg-white rounded-lg p-2">
                  CONTACT US
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
              hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}
              >
              {isClick ? <CloseIcon/> : <MenuOpenIcon/>}
              </button>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden">
               <div className="px-2 pt-2 pb-3 space-y-1 ">
                <Link href="#home" className="link block text-white hover:text-black hover:bg-white rounded-lg p-2">
                  HOME
                </Link>
                <Link href="#about-us" className="link block text-white hover:text-black hover:bg-white rounded-lg p-2">
                  ABOUT US
                </Link>
                <Link href="#know-god" className="link block text-white hover:text-black hover:bg-white rounded-lg p-2">
                  KNOW GOD
                </Link>
                <Link href="#donate-us" className="link block text-white hover:text-black hover:bg-white rounded-lg p-2">
                  DONATE US
                </Link>
                <Link href="#contact-us" className="link block text-white hover:text-black hover:bg-white rounded-lg p-2">
                  CONTACT US
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
