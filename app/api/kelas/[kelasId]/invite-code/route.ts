import { v4 as uuidv4 } from "uuid";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

//api route untuk generate invite code
export async function PATCH(req: Request,{params}: {params: {kelasId: string}}) {

    try {
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!params.kelasId) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const kelas = await db.kelas.update({
            where: {
                id: params.kelasId,
                profileId: profile.id,
            },
            data: {
                inviteCode: uuidv4(),
            },
        });
        
        return NextResponse.json(kelas);
    }catch (error) {
        console.log("server_patchError: ", error);
        return new NextResponse("internal server error", { status: 500 });
    } 

}