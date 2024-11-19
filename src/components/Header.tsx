"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUtensils, FaBars } from "react-icons/fa";

const Header = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsNavbarSticky(true);
      } else {
        setIsNavbarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isNavbarSticky ? "bg-dark shadow-sm" : "bg-transparent"
      } px-4 py-3 lg:px-5`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <FaUtensils className="text-primary" size={35} />
          <h1 className="text-primary text-4xl font-extrabold">Restaura</h1>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Desktop Navbar links */}
        <div className="hidden lg:flex flex-grow text-base justify-end items-center space-x-4 lg:space-x-8 uppercase">
          <Link href="/" className="text-white hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-primary">
            Service
          </Link>
          <Link href="/menu" className="text-white hover:text-primary">
            Menu
          </Link>
          <Link href="/contact" className="text-white hover:text-primary">
            Contact
          </Link>
          <button className="bg-primary py-2 px-4 rounded-sm uppercase text-white hover:bg-blue-950 transition duration-300">
            <Link href="/contact">Book A Table</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-dark text-white uppercase w-full mt-4 rounded-md shadow-lg">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href="/menu"
            className="block px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
