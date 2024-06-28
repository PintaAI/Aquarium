import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";

import { NavigationAction } from "./navigation-action";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { NavigationItem } from "./navigation-item";
import { NavigationItemMobile } from "./navigation-item-mobile";

export const NavigationTopBar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/community/");
  }

  const kelas = await db.kelas.findMany({
    where: {
      member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  console.log(kelas);

  return (
    <div className="flex items-center h-full text-primary w-full dark:bg-secondary/30 py-3 rounded-t-md border-b-[3px]">
      <ScrollArea className="flex w-full ">
        <div className="flex items-center w-full">
          <div className="flex flex-row w-max p-1 ">
            {kelas.map((kelas) => (
              <div key={kelas.id} className="shrinkk-1">
                <NavigationItemMobile
                  id={kelas.id}
                  name={kelas.name}
                  image={kelas.imageUrl ?? ""}
                />
              </div>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Separator className="w-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md h-10 mx-auto" />
      <NavigationAction />
    </div>
  );
};
