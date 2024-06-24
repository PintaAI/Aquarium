import {NavigationTopBar} from "@/components/navigation/navigation-mobile-topbar";
import { NavigationSideBar } from "@/components/navigation/navigation-sidebar";
// Pastikan kamu sudah membuat komponen ini

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0 ">
        <NavigationSideBar />
      </div>
      <div className="md:hidden fixed top-0 left-0 w-full h-[60px] z-30">
        <NavigationTopBar />
      </div>
      <main className="md:pl-[72px] h-full md:pt-0 ">{children}</main>
    </div>
  );
};

export default MainLayout;
