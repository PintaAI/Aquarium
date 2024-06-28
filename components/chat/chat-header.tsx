import { Menu, MessageSquare } from "lucide-react"
import { MobileToggle } from "../mobile.-toggle";

interface ChatHeaderProps {
    kelasId: string;
    name: string;
    type: "room" | "conversation" | "home"
    image: string;
}

export const ChatHeader = ({
    kelasId,
    name,
    type,
    image
}: ChatHeaderProps) => {
return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 dark:bg-secondary">
        <MobileToggle kelasId={kelasId}/>
        {type === "room" && (
            <MessageSquare className="w-6 h-6 text-primary dark:text-white" />
        )}
        <p className="ml-2 text-lg font-bold text-gray-800 dark:text-white">
            {name}
        </p>
    </div>
);
}

