"use Clienrt"

import { KelasMemberRoom } from "@/type";
import { MemberRoles, RoomType } from "@prisma/client";

interface KelasSectionProps {
    label: string;
    role?: MemberRoles;
    roomType: RoomType;
    server?: KelasMemberRoom;
}

export const KelasSection = async({
    label,
    role,
    roomType,
    server,
}:KelasSectionProps) => {
    return(
        <div className="flex items-center justify-between py-2">
           <p className="text-zinc-500 text-xs uppercase font-semibold dark:text-zinc-400">
            {label}
           </p>
        </div>
    )
}