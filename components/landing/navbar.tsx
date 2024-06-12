"use client"
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from "../Auth/login-button";
import { Button } from "../ui/button";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-xl">PejuangKorea</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="hover:text-gray-400 text-lg">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-400 text-lg">
            Community
          </Link>
          <Link href="#" className="hover:text-gray-400 text-lg">
            Learn
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4">
            <LoginButton mode="modal" asChild>
              <Button variant="default">Login</Button>
            </LoginButton>
            <ModeToggle />
          </div>
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link href="#" className="block hover:text-gray-400 text-lg">
              Themes
            </Link>
            <Link href="#" className="block hover:text-gray-400 text-lg">
              Primitives
            </Link>
            <Link href="#" className="block hover:text-gray-400 text-lg">
              Icons
            </Link>
            <div className="flex items-center space-x-4 mt-2">
              <LoginButton mode="modal" asChild>
                <Button variant="default">Login</Button>
              </LoginButton>
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

//fix md:hidden button