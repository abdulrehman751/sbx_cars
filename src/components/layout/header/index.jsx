"use client";
import { navLinks } from "@/constants/general";
import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white border-b'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='flex justify-between items-center py-4'>
          <button
            className='text-black text-2xl lg:hidden'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold tracking-wide'>SBX | CARS</h1>
            <p className='text-xs text-gray-600'>SUPERCAR BLONDIE</p>
          </div>

          <div className='flex items-center space-x-4'>
            <FaSearch className='text-lg cursor-pointer' />
            <a href='#' className='text-black hover:underline'>
              Sign in
            </a>
          </div>
        </div>

        {menuOpen && (
          <nav className='lg:hidden flex flex-col items-center space-y-4 py-4 border-t'>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className='hover:text-black'>
                {link.name}
              </a>
            ))}
          </nav>
        )}

        <nav className='hidden lg:flex justify-center space-x-6 py-2 text-gray-700 text-sm'>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className='hover:text-black'>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
