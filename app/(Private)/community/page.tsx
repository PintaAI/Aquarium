
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation"
import { InitialModal } from "@/components/modals/initial-modal";

const ServerPage = async () => {
   const profile = await initialProfile();

   const kelas = await db.kelas.findFirst({
    where: {
      member: {
        some: {
          profileId: profile?.id
        }
      }
    }
   });

   if (kelas){
    return redirect(`community/kelas/${kelas.id}`);
   }
      return (
        <InitialModal />
      )
}

export default ServerPage;