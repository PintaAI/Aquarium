"use client"
import Image from "next/image";
import { LogOut, User, icons } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { logout } from "@/actions/logout";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

 interface UserStatusProps {
   username: string;
   image: string;
   onlineStatus: boolean;
 }

  export const UserStatus = ({ username, image, onlineStatus }: UserStatusProps) => {
      const Logout = () => {
        logout();
      };
    return (
      <div className="flex items-center space-x-3 p-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md shadow-lg">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none" asChild>
            <div className="flex space-x-3 hover:bg-muted rounded-sm hover:pl-2 p-1 w-40">
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
                <span className="text-xs text-gray-400">
                  {onlineStatus ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
            <DropdownMenuItem onClick={Logout} className="text-rose-400 px-3 py-2 text-sm cursor-pointer">
              LogOut
              <LogOut className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    );
  }


