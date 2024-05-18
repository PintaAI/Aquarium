"use client";

//di sini tempatnya buat struktur data login kaya schema lah untuk nanti dipaken di login page
interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode="redirect",
    asChild 
    }: LoginButtonProps) => {
        const onClick = () => {
            console.log("clicked")
        }
        return(
            <span onClick={onClick} className="cursor-pointer">
                {children}
            </span>
        )
    }