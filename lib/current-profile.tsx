import { currentUser } from "./auth";
import { db } from "./db";

export const currentProfile = async () => {
  const user = await currentUser();

    if (!user) {
      return null;
    }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  console.log("Profile fetched:", profile);

  return profile;
};
