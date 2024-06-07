"use client"
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { UseCurrentUser } from "@/hooks/use-current-user";


const settings =  () => {

    const session = UseCurrentUser();
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