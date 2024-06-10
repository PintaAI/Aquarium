"use client"

import Image from "next/image"
import { useParams,useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ActionTooltip } from "../action-tooltip"


interface NavigationItemProps {
  id: string | null;
  name: string | null;
  image: string | null;
}

export const NavigationItem = ({id,image,name}:NavigationItemProps) => {
    const param = useParams()
    const router = useRouter()

    return (
        <ActionTooltip         
         side="right"
            align="center"
            label={name}
        >
            <button onClick={()=>{}} className="group relative fllex items-center">
                <div className={cn("absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
                    param?.kelasId !== id && "group-hover:h-[20px]",
                    param?.kelasId === id ? "h-[36px]":"h-[8px]"
                )}/>
                   
                <div className={cn(
                    "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16] transition-all overflow-hidden",
                    param?.kelasId === id && "bg-primary/10 text-primary rounded-[16px]",
                )}>
                <Image
                fill
                src={image}
                alt="kelas"
                />
                </div>
            </button>
        </ActionTooltip>
    )
}