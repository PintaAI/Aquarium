import {ChatHeader} from "@/components/chat/chat-header";
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
    <div className="h-full w-full z-20 flex flex-col mt-[60px] md:mt-0 fixed inset-y-0">
      <ChatHeader
        kelasId={params.kelasId}
        name={room.name}
        type={"room"}
        image={""}
      />
      ini bakal jadi chatroom nantinya
    </div>
  );
};

export default KelasIdPage;
