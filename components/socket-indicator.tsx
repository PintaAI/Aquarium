"use client";

import { useSocket } from "./providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

   if(!isConnected) {
    return (
        <Badge
            variant={"outline"}
            className="text-red-500 dark:text-red-400"
        >
            Offline
        </Badge>
    )
   }

   return (
         <Badge
                variant={"outline"}
                className="text-green-500 dark:text-green-400"
         >
              Online
         </Badge>
   )
}