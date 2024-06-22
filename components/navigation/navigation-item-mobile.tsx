"use client"
import Image from "next/image"
import { useParams,useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ActionTooltip } from "../action-tooltip"


interface NavigationItemProps {
  id: string ;
  name: string ;
  image: string ;
}

export const NavigationItemMobile = ({ id, image, name }: NavigationItemProps) => {
    const param = useParams();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/community/kelas/${id}`)
    }
    

    return (
      <ActionTooltip side="bottom" align="center" label={name}>
        <button
          onClick={handleClick}
          className="group relative flex flex-col-reverse items-center"
        >
          <div
            // ini adalah garis yang menandakan kelas mana yang sedang aktif
            className={cn(
              " bg-primary dark:bg-white mt-1 rounded-t-full transition-all h-[4px]",
              param?.kelasId !== id && "group-hover:w-[20px]",
              param?.kelasId === id ? "w-[36px]" : "w-[8px]"
            )}
          />
          <div
            // ini adalah gambar kelas
            className={cn(
              "relative flex mx-3 h-[48px] w-[48px] rounded-[24px] transition-all overflow-hidden ",
              param?.kelasId === id
                ? "bg-primary/10 text-primary rounded-[16px]"
                : "group-hover:rounded-[16px]"
            )}
          >
            <Image fill src={image} alt="kelas" sizes="48px" priority={true} />
          </div>
        </button>
      </ActionTooltip>
    );
}