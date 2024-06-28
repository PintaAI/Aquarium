"use client"

import { cn } from "@/lib/utils";
import { Kelas, MemberRoles, Room, RoomType } from "@prisma/client"
import { Edit, Lock, MessageSquareMore, Mic, Trash, Video } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";
import { useState } from "react";



interface KelasRoomProps {
    room : Room;
    kelas : Kelas;
    role?: MemberRoles;

}

const iconMap = {
    [RoomType.TEXT]: MessageSquareMore,
    [RoomType.AUDIO]: Mic,
    [RoomType.VIDEO]: Video,
};


export const KelasRoom = ({
    room,
    kelas,
    role,
}: KelasRoomProps) => {
    const params = useParams();
    const router = useRouter();

    const Icon = iconMap[room.type]
    const [isHovered, setIsHovered] = useState(false);
    const fullText = room.name;
    const truncatedText = fullText.split(" ").slice(0, 2).join(" ") + " ‹";

    return (
      <button
        onClick={() => {}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-secondary focus:outline-none focus:ring-offset-2 focus:ring-zinc-500 transition-colors mb-1",
          params.roomId === room.id &&
            "bg-primary dark:bg-primary dark:group-hover:bg-primary"
        )}
      >
        <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        <p
          className={cn(
            "text-zinc-500 dark:text-zinc-400 font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition",
            params.roomId === room.id &&
              "text-primary dark:text-zinc-200 dark:group-hover:text-white"
          )}
        >
          {isHovered ? truncatedText : fullText}
        </p>
        {room.name !== "general" && role !== MemberRoles.STUDENT && (
          <div className="ml-auto flex item-center gap-x-2 transition">
            <ActionTooltip label="edit">
              <Edit className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition" />
            </ActionTooltip>
            <ActionTooltip label="delete">
              <Trash className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition" />
            </ActionTooltip>
          </div>
        )}
        {room.name === "general" && (
          <Lock className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        )}
      </button>
    );
}

// menit 6:25