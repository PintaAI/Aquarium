import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation"

const ServerPage = async () => {
   const profile = await initialProfile();

   const server = await db.kelas.findFirst({
    where: {
      member: {
        some: {
          profileId: profile?.id
        }
      }
    }
   });

   if (server){
    return redirect(`/server/${server.id}`);
   }
  return (
    <div>
      
      ServerPage
    </div>
  );
}

export default ServerPage;