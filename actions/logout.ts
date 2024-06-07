"use server"
import { signOut } from "@/auth";

export const logout = async () => {

    //do something before signOut
    await signOut({redirectTo: "/auth/login"});
}