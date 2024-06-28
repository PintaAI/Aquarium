import { ChatHeader } from "@/components/chat/chat-header";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface KelasIdPageProps {
  params: {
    kelasId: string;
  };
}

const Home = async ({ params }: KelasIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return null;
  }
  const kelas = await db.kelas.findFirst({
    where: {
      id: params.kelasId,
    },
  });
  
  if (!kelas) {
    return null;
  }
  const member = await db.member.findFirst({
    where: {
      kelasId: params.kelasId,
      profileId: profile.id,
    },
  });

  if ( !member) {
    redirect(`/community/`);
  }

  return (
    <div className="h-full w-full z-20 flex flex-col mt-[60px] md:mt-0 inset-y-0">
      <ChatHeader
        kelasId={params.kelasId}
        name={kelas.name}
        type={"home"}
        image={""}
      />
      <div className="flex-1 flex">
        <div className="flex-1 border border-green-600">
          ini display chat nantiinya
        </div>
        <div className="flex-1 border border-blue-500">ini nantinya video</div>
      </div>
    </div>
  );
};

export default Home;
