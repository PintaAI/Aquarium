import Image from "next/image";

 interface UserStatusProps {
   username: string;
   image: string;
   onlineStatus: boolean;
 }

  export const UserStatus = ({ username, image, onlineStatus }: UserStatusProps) => {
    return (
      <div className="flex items-center space-x-3 p-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md shadow-lg">
        <div className="flex space-x-3 hover:bg-muted rounded-sm hover:pl-2 p-1 w-40">
          <div className="relative">
            <Image
              className="rounded-full"
              src={image}
              alt="kelas"
              width={38} // Adjust width as needed
              height={38} // Adjust height as needed
            />
            <span
              className={`absolute bottom-0 right-0 block h-2 w-2 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-gray-500"
              } ring-2 ring-background/95`}
            />
          </div>
          <div className="flex flex-col">
            <span className=" font-semibold text-sm">{username}</span>
            <span className="text-xs text-gray-400">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }


