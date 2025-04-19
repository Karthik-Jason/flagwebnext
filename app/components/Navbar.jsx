import Link from "next/link";
import Image from "next/image";
import logo from '../assets/flag-logo.png'
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="header">
          <Link href="/" className="logo"><Image alt="logo" src={logo} /></Link>
          <nav className="navbar">
          <Link href="#home" className="link">HOME</Link>
          <Link href="#about-us" className="link">ABOUT US</Link>
          <Link href="#know-god"className="link">KNOW GOD</Link>
          <Link href="#donate-us"className="link" >DONATE US</Link>
          <Link href="#contact-us"className="link">CONTACT US</Link>
        </nav>
        </header>
    );
  }