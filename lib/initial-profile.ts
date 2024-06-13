import { currentUser } from "./auth";
import { db } from "./db";

export const initialProfile = async () => {
  // Get the currently logged-in user
  const user = await currentUser();

  // If there is no logged-in user, return null
  if (!user) {
    return null;
  }

  // Attempt to find an existing profile for the current user in the database
  let profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  // If a profile is found, return it
  if (profile) {
    return profile;
  }

  // If no profile is found, create a new profile for the user
  profile = await db.profile.create({
    data: {
      userId: user.id ?? "", // Use the user ID or an empty string if undefined
      email: user.email ?? "", // Use the user email or an empty string if undefined
      image: user.image ?? "", // Use the user image or an empty string if undefined
      name: user.name ?? "", // Use the user name or an empty string if undefined
    },
  });

  // Add the profile as a member with the role of STUDENT to the specific room
  const roomId = "clxcwzb4q0013fjxxip7wqt8z";
  await db.member.create({
    data: {
      role: "STUDENT",
      profileId: profile.id,
      kelasId: roomId,
    },
  });

  // Return the newly created profile
  return profile;
};
