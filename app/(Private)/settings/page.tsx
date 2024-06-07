"use client"
import { useSession } from "next-auth/react";
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";


const settings =  () => {

    const session = useSession();
    const onClick = () => {
        logout();
    }

    return (
        <div className="text-white">
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <Button variant="outline" onClick={onClick}>Sign Out</Button>
        </div>
    );
}

export default settings;