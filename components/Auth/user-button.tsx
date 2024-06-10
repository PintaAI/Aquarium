import Image from "next/image";

 interface UserStatusProps {
   username: string;
   image: string;
   onlineStatus: boolean;
 }

  export const UserStatus = ({ username, image, onlineStatus }: UserStatusProps) => {
    return (
      <div className="flex items-center space-x-3 p-2 bg-[#191a1d] rounded-md shadow-lg">
        <div className="flex space-x-3 hover:bg-slate-800 rounded-sm p-2">
          <div className="relative">
            <Image
              className="rounded-full"
              src={image}
              alt="kelas"
              width={40} // Adjust width as needed
              height={40} // Adjust height as needed
            />
            <span
              className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-gray-500"
              } ring-2 ring-white`}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium">{username}</span>
            <span className="text-xs text-gray-400">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }


