import Link from 'next/link';
import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from '../Auth/login-button';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-blur backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full border-b border-border/40">
      <div className="flex items-center">
        <span className="font-semibold text-lg">PejuangKorea</span>
      </div>
      <div className="flex items-center flex-1 justify-center space-x-4">
        <Link href="#"><span className="hover:text-gray-400">Themes</span></Link>
        <Link href="#"><span className="hover:text-gray-400">Primitives</span></Link>
        <Link href="#"><span className="hover:text-gray-400">Icons</span></Link>
       
      </div>
      <ModeToggle/>
      <LoginButton>Login</LoginButton>
    </nav>
  );
}

export default NavBar;
