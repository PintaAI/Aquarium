import { auth, signOut } from "@/auth";

const settings = async () => {

    const session = await auth();
    
    return (
        <div className="text-white">
        {JSON.stringify(session)}
        <form action={
            async () => {
                "use server";
                await signOut();
            }
        }>
            <button type="submit"> signOut</button>
        </form>
        </div>
    );
}

export default settings;