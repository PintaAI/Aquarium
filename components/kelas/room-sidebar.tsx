import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { RoomType } from "@prisma/client";
import { KelasHeader } from "./kelas-header";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { KelasSection } from "./kelas-section";
import {UserStatus} from "../Auth/user-button";
import { ServerSearch } from "./server-search";
import { MessageSquareMore, Mic, Video } from "lucide-react";
import { KelasRoom } from "./kelas-room";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

 

// ini adalah siebar yang berisi list room yang ada di kelas
interface RoomSidebarProps {
    kelasId: string;
}
const iconMap = {
  [RoomType.TEXT]: <MessageSquareMore className="mr-2 h-3 w-2" />,
  [RoomType.AUDIO]: <Mic className="mr-2 h-3 w-2" />,
  [RoomType.VIDEO]: <Video className="mr-2 h-3 w-2" />
};


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
        return redirect('/community')
    }

    const role = kelas.member.find((member) => member.profileId === profile.id)?.role;
    
return (
  <div className="flex flex-col h-full w-full ml-[0px] bg-[#f2f3f5] rounded-l-sm dark:bg-gradient-to-b dark:from-background dark:to-secondary from-30% to-80% border-r-[1px] border-grey">
    <KelasHeader kelas={kelas} role={role} />
    <ScrollArea className="flex-1 px-3">
      <div>
        <ServerSearch
          data={[
            {
              label: "Chat room",
              type: "room",
              data: textRoom?.map((room) => ({
                icon: iconMap[room.type],
                name: room.name,
                id: room.id,
              })),
            },
            {
              label: "Voice room",
              type: "room",
              data: audioRoom?.map((room) => ({
                icon: iconMap[room.type],
                name: room.name,
                id: room.id,
              })),
            },
            {
              label: "Video room",
              type: "room",
              data: videoRoom?.map((room) => ({
                icon: iconMap[room.type],
                name: room.name,
                id: room.id,
              })),
            },
          ]}
        />
      </div>
      <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
      {!!textRoom?.length && (
        <div className="mb-2">
          <KelasSection
            selectionType={"rooms"}
            label={"Chat room"}
            roomType={RoomType.TEXT}
            role={role}
          />
          {textRoom.map((room) => (
            <KelasRoom key={room.id} room={room} kelas={kelas} role={role} />
          ))}
        </div>
      )}
      {!!audioRoom?.length && (
        <div className="mb-2">
          <KelasSection
            selectionType={"rooms"}
            label={"Voice room"}
            roomType={RoomType.AUDIO}
            role={role}
          />
          {audioRoom.map((room) => (
            <KelasRoom key={room.id} room={room} kelas={kelas} role={role} />
          ))}
        </div>
      )}
      {!!videoRoom?.length && (
        <div className="mb-2">
          <KelasSection
            selectionType={"rooms"}
            label={"Video room"}
            roomType={RoomType.VIDEO}
            role={role}
          />
          {videoRoom.map((room) => (
            <KelasRoom key={room.id} room={room} kelas={kelas} role={role} />
          ))}
        </div>
      )}
    </ScrollArea>
    <div>
      <UserStatus
        username={profile.name}
        image={profile.image || ""}
        onlineStatus={true}
      />
    </div>
  </div>
);
}