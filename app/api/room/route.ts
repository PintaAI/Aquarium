import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRoles } from "@prisma/client";
import { channel } from "diagnostics_channel";
import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
    try{
        const profile = await currentProfile();
        const { name, type } = await req.json();
        const { searchParams } = new URL(req.url);

        const kelasId = searchParams.get("kelasId");

        if (!profile){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!kelasId){
            return new NextResponse("Bad Request", { status: 400 });
        }

    const kelas = await db.kelas.update({
        where: {
            id: kelasId,
            member:{
                some:{
                    role: {
                        in: [MemberRoles.MODERATOR, MemberRoles.TEACHER]
                    }
                }
            }
        },
        data: {
            room: {
                create: {
                    profileId: profile.id,
                    name,
                    type,
                }
            }
        }
    });
    return NextResponse.json(kelas);
    } catch(error) {
        console.error("ROOM_POST", error);
        return new NextResponse("internal error", {status: 500 });   
    }
}