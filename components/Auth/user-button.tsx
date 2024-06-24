"use client"
import Image from "next/image";
import { HomeIcon, LogOut, User, icons,} from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { logout } from "@/actions/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { SocketIndicator } from "../socket-indicator";

 interface UserStatusProps {
   username: string;
   image: string;
   onlineStatus: boolean;
 }

  export const UserStatus = ({ username, image, onlineStatus }: UserStatusProps) => {
      const Logout = () => {
        logout();
      };
      const router = useRouter();
      const handleNavigation = (path: string) => {
        router.push(path);
      };
    return (
      <div className="flex items-center p-1 bg-white dark:bg-secondary border-[1px] border-grey">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none" asChild>
            <div className="flex space-x-3 hover:bg-zinc-300 dark:hover:bg-muted rounded-sm hover:pl-2 p-1 w-40">
              <div className="relative">
                {image ? (
                  <Image
                    className="rounded-full"
                    src={image}
                    alt="kelas"
                    width={38} // Adjust width as needed
                    height={38} // Adjust height as needed
                  />
                ) : (
                  <User className="rounded-full bg-muted" size={38} />
                )}
                <span
                  className={`absolute bottom-0 right-0 block h-2 w-2 rounded-full ${
                    onlineStatus ? "bg-green-500" : "bg-gray-500"
                  } ring-2 ring-background/95`}
                />
              </div>
              <div className="flex flex-col">
                <span className=" font-semibold text-sm">{username}</span>
                <span>
                  <SocketIndicator />
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
            <DropdownMenuItem
              onClick={Logout}
              className="text-rose-400 px-3 py-2 text-sm cursor-pointer"
            >
              LogOut
              <LogOut className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex ml-auto">
          <Button
            onClick={() => handleNavigation("/")}
            className=" hover:bg-muted"
            size={"icon"}
            variant={"ghost"}
          >
            <HomeIcon className=" w-5 h-5" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    );
  }


