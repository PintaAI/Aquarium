import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
// api route untuk setting/update kelas
export async function PATCH(req: Request,{params}: {params: {kelasId: string}}) {
    try {
        const profile = await currentProfile();
        const {name, imageUrl} = await req.json();
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
               name,
                imageUrl,
            },
        });
        return NextResponse.json(kelas);
    }catch (error) {
        console.log("server_patchError: ", error);
        return new NextResponse("internal server error", { status: 500 });
    }
}