
import NavBar from "@/components/landing/navbar";
import { NavigationSideBar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
    children

}:{
    children: React.ReactNode
}) => {
    return (
      <div className="h-full">
        <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0 pt-[52px]">
          <NavBar />
          <NavigationSideBar />
        </div>
        <main className="md:pl-[70px] h-full pt-14">{children}</main>
      </div>
    );
} 

export default MainLayout;