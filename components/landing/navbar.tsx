"use client";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from "../Auth/login-button";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react"; // Assuming you have lucide-react for icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 w-full z-10">
      <div className="flex items-center">
        <span className="font-semibold text-lg">PejuangKorea</span>
      </div>
      <div className="flex items-center lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={`flex-col items-center lg:flex lg:flex-row lg:space-x-4 lg:static lg:bg-transparent ${
          isOpen ? "flex" : "hidden"
        } bg-background lg:bg-transparent absolute top-full left-0 right-0 space-y-4 lg:space-y-0 py-4 lg:py-0`}
      >
        <Link href="#">
          <span className="hover:text-gray-400">Themes</span>
        </Link>
        <Link href="#">
          <span className="hover:text-gray-400">Primitives</span>
        </Link>
        <Link href="#">
          <span className="hover:text-gray-400">Icons</span>
        </Link>
        <div className="flex lg:hidden items-center space-x-4">
          <ModeToggle />
          <LoginButton mode="modal" asChild>
            <Button variant="default">Login</Button>
          </LoginButton>
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <LoginButton mode="modal" asChild>
          <Button variant="default">Login</Button>
        </LoginButton>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
