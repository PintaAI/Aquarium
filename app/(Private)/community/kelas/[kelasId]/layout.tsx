import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { RoomSidebar } from "@/components/kelas/room-sidebar";

 

//ini adalah layout untuk halaman kelas isinya ada sidebar untuk list roo,m dan 
const KelasIdLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { kelasId: string };
}) => {
    console.log("Entering KelasIdLayout");

    const profile = await currentProfile();
    if (!profile) {
        console.log("Profile not found. Redirecting to /auth/login");
        return redirect("/auth/login");
    }

    const kelas = await db.kelas.findUnique({
        where: {
            id: params.kelasId,
            member: {
                some: {
                    profileId: profile.id,
                },
            },
        },
    });

    if (!kelas) {
        console.log("Kelas not found. Redirecting to /community/kelas");
        return redirect("/community/kelas");
    }

    console.log("Rendering KelasIdLayout");
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
                <RoomSidebar kelasId={params.kelasId} />
            </div>
            <main className="h-full md:pl-60">{children}</main>
        </div>
    );
};

export default KelasIdLayout;
