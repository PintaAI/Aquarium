import { Menu } from "lucide-react";

import { Sheet
    ,SheetContent,
    SheetTrigger
 } from "./ui/sheet";
import { Button } from "./ui/button";
import { RoomSidebar } from "./kelas/room-sidebar";
import { strict } from "assert";


export const MobileToggle = ({
    kelasId
}: {
    kelasId: string;
}) => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu className="text-primary dark:text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0 gap-0">
          <RoomSidebar kelasId={kelasId} />
        </SheetContent>
      </Sheet>
    );
}
    