"use client"

import { KelasMemberRoom } from "@/type";
import { MemberRoles, RoomType } from "@prisma/client";
import { ActionTooltip } from "../action-tooltip";
import { PlusIcon } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface KelasSectionProps {
    label: string;
    role?: MemberRoles;
    selectionType: "rooms" | "members";
    roomType: RoomType;
    server?: KelasMemberRoom;
}

export const KelasSection = ({
    label,
    role,
    selectionType,
    roomType,
    server,
}:KelasSectionProps) => {
    const {onOpen} = useModal();
    return(
        <div className="flex items-center justify-between py-2">
           <p className="text-zinc-500 text-xs uppercase font-semibold dark:text-zinc-400">
            {label}
           </p>
           {role !== MemberRoles.STUDENT && selectionType === "rooms" && (
            <ActionTooltip label="tambah room" side="top">
                <button
                onClick={()=>onOpen("tambahRoom")}>
                    <PlusIcon className="w-4 h-4" />
                </button>

            </ActionTooltip>
           )}
        </div>
    )
} 