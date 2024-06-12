import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { RoomType } from "@prisma/client";
import { KelasHeader } from "./kelas-header";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { KelasSection } from "./kelas-section";
import {UserStatus} from "../Auth/user-button";

interface RoomSidebarProps {
    kelasId: string;
}

export const RoomSidebar = async({kelasId}: RoomSidebarProps) => {
    const profile = await currentProfile();
    if(!profile) {
        return redirect('/auth/login')
    }
    const kelas = await db.kelas.findUnique({
        where: {
            id: kelasId,
        },
        include: {
            room:{
                orderBy: {
                    createdAt: 'asc'
                }
            },
            member: {
                include: {
                    profile: true,
                },
                orderBy: {
                    role: 'asc'
                }
            }
        }
    });
    
    const textRoom = kelas?.room.filter((room) => room.type === RoomType.TEXT);
    const audioRoom = kelas?.room.filter((room) => room.type === RoomType.AUDIO);
    const videoRoom = kelas?.room.filter((room) => room.type === RoomType.VIDEO);

    if(!kelas) {
        return redirect('/community/kelas')
    }

    const role = kelas.member.find((member) => member.profileId === profile.id)?.role;
    
    return (
      <div className="flex flex-col h-full w-full dark:bg-secondary bg-[#f2f3f5] rounded-l-3xl">
      <KelasHeader kelas={kelas} role={role} />
      <ScrollArea className="flex-1 px-3">
        <div>search</div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
        {!!textRoom?.length && (
        <div className="mb-2">
          <KelasSection
          label={"Text Room"}
          roomType={RoomType.TEXT}
          role={role}
          />
        </div>
        )}
      </ScrollArea>
      <div>
        <UserStatus
        username={profile.name}
        image={profile.image ||""}
        onlineStatus={true}
        />
      </div>
      </div>
    );
}