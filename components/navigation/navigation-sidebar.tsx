import { currentProfile } from '@/lib/current-profile'
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';


import { NavigationAction } from './navigation-action';

export const NavigationSideBar = async () => {
const profile = await currentProfile();

if(!profile) {
  return redirect('/login')
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

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1e1f21] py-3">
      <NavigationAction></NavigationAction>
    </div>
  )
}
