"use client";
import { KelasMemberRoom } from "@/type";
import { MemberRoles } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown,LogOut,PlusCircle,Settings,Trash,UserPlus2 } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface KelasHeaderProps {
    kelas: KelasMemberRoom;
    role?: MemberRoles;
}

export const KelasHeader =(
    {kelas, role}: KelasHeaderProps
) => {
    const {onOpen} = useModal();


    const isTeacher = role === MemberRoles.TEACHER;
    const isModerator = isTeacher || role === MemberRoles.MODERATOR;


    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none" asChild>
          <button className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 focus:outline-none focus:ring-offset-2 focus:ring-zinc-500 shadow-md">
            {kelas.name}
            <ChevronDown className="h-5 w-5 ml-auto text-gray-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
          {isModerator && (
            <DropdownMenuItem
              onClick={() => {
                console.log("Ini adalah data kelas:", kelas);
                onOpen("invite", { kelas });
              }}
              className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
            >
              invite
              <UserPlus2 className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isTeacher && (
            <DropdownMenuItem
              onClick={() => {
                console.log("Ini adalah data kelas:", kelas);
                onOpen("settings", { kelas });
              }}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Settings
              <Settings className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isTeacher && (
            <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
              Tambah Room
              <PlusCircle className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isTeacher && <DropdownMenuSeparator />}

          {isTeacher && (
            <DropdownMenuItem className="text-rose-400 px-3 py-2 text-sm cursor-pointer">
              Hapus Kelas
              <Trash className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {!isTeacher && (
            <DropdownMenuItem className="text-rose-400 px-3 py-2 text-sm cursor-pointer">
              keluar
              <LogOut className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
}