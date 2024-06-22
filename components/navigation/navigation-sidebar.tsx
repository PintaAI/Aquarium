import { currentProfile } from '@/lib/current-profile'
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { Separator } from '@/components/ui/separator';

import { NavigationAction } from './navigation-action';
import { ScrollArea } from '../ui/scroll-area';
import { NavigationItem } from './navigation-item';


export const NavigationSideBar = async () => {
const profile = await currentProfile();

if(!profile) {
  return redirect('/community/')
}


  const kelas = await db.kelas.findMany({
    where: {
      member: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  console.log(kelas);

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-secondary py-3 rounded-t-md bg-[#e3e5e8]">
      <ScrollArea className="flex-1 w-full">
        {kelas.map((kelas) => (
          <div key={kelas.id} className="mb-4">
            <NavigationItem
              id={kelas.id}
              name={kelas.name}
              image={kelas.imageUrl ?? ""}
            />
          </div>
        ))}
      </ScrollArea>
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <NavigationAction />
    </div>
  );
}
