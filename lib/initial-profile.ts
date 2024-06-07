import { currentUser } from "./auth";
import { db } from "./db";

export const initialProfile = async () => {
    const user = await currentUser();
    if (!user) {
        return null;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id
        }
    });
    
    if (profile) {
        return profile;
    }

    const newProfile = await db.profile.create({
      data: {
            userId: user.id ?? "",
            email: user.email ?? "",
            image: user.image ?? "",
            name: user.name ?? "",
        },
    });
}