import { Member,Kelas,Profile } from "@prisma/client"

export type KelasMemberRoom = Kelas &{
    member: (Member &{profile: Profile})[];
}