"use client";
import { Button } from "../ui/button";  // Adjust the import according to your installation
import { useRouter } from "next/navigation";
import { Dialog,
    DialogContent,
    DialogTrigger

} from "../ui/dialog";
import { LoginForm} from "@/components/Auth/login-form";
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
   if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger>
          <Button onClick={onClick} variant="outline">
            {children}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
   }
   
    return (
        <Button onClick={onClick} variant="outline">
            {children}
        </Button>
    );
}
