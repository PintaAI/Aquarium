"use client"

import { Kelas, MemberRoles, Room, RoomType } from "@prisma/client"
import { MessageSquareMore, Mic, Video } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";


interface KelasRoomProps {
    room : Room;
    kelas : Kelas;
    role?: MemberRoles;

}

const iconMap = {
    [RoomType.TEXT]: <MessageSquareMore className="mr-2 h-3 w-2" />,
    [RoomType.AUDIO]: <Mic className="mr-2 h-3 w-2" />,
    [RoomType.VIDEO]: <Video className="mr-2 h-3 w-2" />,
};


export const KelasRoom = ({
    room,
    kelas,
    role,
}: KelasRoomProps) => {
    const params = useParams();
    const router = useRouter();

    const Icon = iconMap[room.type];
    return (
        <button>
            {room.name}
        </button>
    )
}