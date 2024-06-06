"use client";
import { Button } from "../ui/button";  // Adjust the import according to your installation
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode="redirect",
    asChild 
}: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    }
   
    return (
        <Button onClick={onClick} variant="outline">
            {children}
        </Button>
    );
}
