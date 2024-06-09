"use client"
import Link from 'next/link';
import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from '../Auth/login-button';
import { Button } from '../ui/button';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 w-full z-10">
      <div className="flex items-center">
        <span className="font-semibold text-lg">PejuangKorea</span>
      </div>
      <div className="flex items-center flex-1 justify-center space-x-4">
        <Link href="#">
          <span className="hover:text-gray-400">Themes</span>
        </Link>
        <Link href="#">
          <span className="hover:text-gray-400">Primitives</span>
        </Link>
        <Link href="#">
          <span className="hover:text-gray-400">Icons</span>
        </Link>
      </div>
      <ModeToggle />
      <LoginButton mode="modal" asChild>
        <Button variant="default">Login</Button>
      </LoginButton>
    </nav>
  );
}

export default NavBar;
