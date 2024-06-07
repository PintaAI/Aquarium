import Link from 'next/link';
import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from '../Auth/login-button';
import { Button } from '../ui/button';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-transparent">
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
      <LoginButton mode="modal">
        login
      </LoginButton>
    </nav>
  );
}

export default NavBar;
