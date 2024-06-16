"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from "../Auth/login-button";
import { Button } from "../ui/button";
import { UseCurrentUser } from "@/hooks/use-current-user";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const session = UseCurrentUser();
  const router = useRouter(); // Initialize useRouter

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path:string) => {
    router.push(path);
  };

  return (
    <nav className="bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 fixed top-0 w-full z-10 shadow-md">
      <div className=" max-w-screen-2xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-xl">PejuangKorea</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation("/")}
            className="hover:text-gray-400 text-lg"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/community")}
            className="hover:text-gray-400 text-lg"
          >
            Community
          </button>
          <button
            onClick={() => handleNavigation("/belajar")}
            className="hover:text-gray-400 text-lg"
          >
            Belajar!
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex lg:flex items-center space-x-4">
            {!session && (
              <LoginButton mode="modal" asChild>
                <Button variant="default">Login</Button>
              </LoginButton>
            )}
            <ModeToggle />
          </div>
          <div className=" lg:hidden md:hidden">
            <ModeToggle />
          </div>
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden md:hidden p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <HamburgerMenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => handleNavigation("/")}
              className="block hover:text-gray-400 text-lg"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/community")}
              className="block hover:text-gray-400 text-lg"
            >
              Community
            </button>
            <button
              onClick={() => handleNavigation("/belajar")}
              className="block hover:text-gray-400 text-lg"
            >
              Belajar
            </button>

            <div className="flex items-center space-x-4 mt-2">
              {!session && (
                <LoginButton mode="modal" asChild>
                  <Button variant="default">Login</Button>
                </LoginButton>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
