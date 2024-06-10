import { currentProfile } from '@/lib/current-profile'
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { Separator } from '@/components/ui/separator';
import { PersonIcon } from "@radix-ui/react-icons";


import { NavigationAction } from './navigation-action';
import { ScrollArea } from '../ui/scroll-area';
import { NavigationItem } from './navigation-item';

import { UserStatus } from '../Auth/user-button';

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
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1e1f21] py-3">
      <NavigationAction/>
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"/>
      <ScrollArea className="flex-1 w-full">
        {kelas.map((kelas)=>(
          <div key={kelas.id} className="mb-4">
            <NavigationItem id={kelas.id} name={kelas.name} image={kelas.imageUrl ?? ''}/>
          </div>
        ))}
        
      </ScrollArea>
    </div>
  )
}
