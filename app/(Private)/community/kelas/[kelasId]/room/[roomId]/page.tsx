import {ChatHeader} from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface KelasIdPageProps {
  params: {
    kelasId: string;
    roomId: string;
  };
}

const KelasIdPage = async ({ params }: KelasIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return null;
  }
  const room = await db.room.findUnique({
    where: {
      id: params.roomId,
    },
  });
  const member = await db.member.findFirst({
    where: {
      kelasId: params.kelasId,
      profileId: profile.id,
    },
  });

  if (!room || !member) {
    redirect(`/community/`);
  }

  return (
    <div className="h-full w-full z-20 flex flex-col  md:mt-0 fixed inset-y-0 border border-red-500">
      <ChatHeader
        kelasId={params.kelasId}
        name={room.name}
        type={"room"}
        image={""}
      />
      <div className="flex-1">ini display chat nantiinya</div>
      <ChatInput 
      name={room.name}
      type="room"
      apiUrl="/api/socket/messages"
      query={{ roomId: room.id,
        kelasId: room.kelasId
       }}
      />
    </div>
  );
};

export default KelasIdPage;
