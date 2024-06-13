import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
    params: {
        inviteCode: string
    };
};

const InviteCodePage = async ({
    params
}: InviteCodePageProps) => {
    const profile = await currentProfile();

    if (!profile) {
        return null
    }

    if (!params.inviteCode) {
        return redirect('/community')
    }

    const existingServer = await db.kelas.findFirst({
        where: {
            inviteCode: params.inviteCode,
            member: {
                some: {
                    id: profile.id
                }
            }
        }
    });

    if (existingServer) {
        return redirect(`/kelas/${existingServer.id}`)
    }

    const kelas = await db.kelas.update({
        where: {
            inviteCode: params.inviteCode
        },
        data: {
            member: {
                create:[
                    {
                        profileId: profile.id
                    }
                ]
            }
        }
    });
   if(kelas) {
         return redirect(`/community/kelas/${kelas.id}`)
   } 

    return null
}

export default InviteCodePage