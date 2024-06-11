// app/api/kelas/route.ts
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRoles } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const { name, image } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const kelas = await db.kelas.create({
      data: {
        name,
        imageUrl: image,
        profileId: profile.id,
        inviteCode: uuidv4(),
        room: {
          create: [{ name: "general", profileId: profile.id }],
        },
        member: {
          create: [{ profileId: profile.id, role: MemberRoles.TEACHER }],
        },
      },
    });

    return NextResponse.json(kelas);
  } catch (error) {
    console.log("server_postError: ", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
