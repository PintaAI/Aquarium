"use client"
// components/Navbar.tsx
import React, { useState } from 'react';
import { Button } from './button';
import Link from 'next/link';
import { LoginButton } from "@/components/Auth/login-button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">MyBrand</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="hidden md:block">
              <LoginButton mode="modal">
              <Button className="bg-pink-500 hover:bg-pink-600">Masuk</Button>
            </LoginButton> 
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none focus:text-gray-900">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
