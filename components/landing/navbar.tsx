"use client";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from "../Auth/login-button";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react"; // Assuming you have lucide-react for icons

const NavBar = () => {


  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 w-full z-10 shadow-lg">
      <div className="flex items-center">
        <span className="font-bold text-xl text-primary">PejuangKorea</span>
      </div>
      <div className="hidden lg:flex items-center space-x-6">
        <Link href="#" className="text-base font-medium hover:text-gray-400 transition duration-200">
          Community
        </Link>
        <Link href="#" className="text-base font-medium hover:text-gray-400 transition duration-200">
          Program G2G koreaSelatan
        </Link>
        <Link href="#" className="text-base font-medium hover:text-gray-400 transition duration-200">
          PintaBot Ai
        </Link>
      </div>
      <div className="flex lg:hidden items-center space-x-4">
        <ModeToggle />
        <LoginButton mode="modal" asChild>
          <Button variant="default">Login</Button>
        </LoginButton>
        <button
          type="button"
          aria-label="Toggle Menu"
          className="text-primary focus:outline-none lg:hidden"
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenu) {
              mobileMenu.classList.toggle("hidden");
            }
          }}
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
      <div
        id="mobile-menu"
        className="hidden lg:hidden flex-col space-y-4 mt-4 bg-background p-4 absolute top-16 right-4 shadow-md rounded-md"
      >
        <Link href="#" className="block text-base font-medium hover:text-gray-400 transition duration-200">
          Themes
        </Link>
        <Link href="#" className="block text-base font-medium hover:text-gray-400 transition duration-200">
          Primitives
        </Link>
        <Link href="#" className="block text-base font-medium hover:text-gray-400 transition duration-200">
          Icons
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
