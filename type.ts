import { Server as NetServer, Socket} from "net"
import { NextApiRequest } from "next"
import { Server as SocketIOServer } from "socket.io"
import { Member,Kelas,Profile } from "@prisma/client"

export type KelasMemberRoom = Kelas &{
    member: (Member &{profile: Profile})[];
}

export type NextApiResponseServerIo = NextApiRequest & {
    socket: Socket & {
        server: NetServer & {
            io: SocketIOServer;
        };
    };
};
