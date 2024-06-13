import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
    params: {
        inviteCode: string
    };
};

/**
 * Handles the logic for the InviteCodePage component.
 * 
 * @param {InviteCodePageProps} props - The props for the InviteCodePage component.
 * @returns {Promise<React.ReactNode>} The rendered React node.
 */
const InviteCodePage = async ({
    params
}: InviteCodePageProps) => {
    // Retrieve the current user's profile
    const profile = await currentProfile();

    if (!profile) {
        return null;
    }

    if (!params.inviteCode) {
        return redirect('/community');
    }

    // Check if the invite code corresponds to an existing server that the user is a member of
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
        return redirect(`/kelas/${existingServer.id}`);
    }

    // Add the user as a member of the server with the provided invite code
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

    if (kelas) {
        return redirect(`/community/kelas/${kelas.id}`);
    }

    return null;
}

export default InviteCodePage