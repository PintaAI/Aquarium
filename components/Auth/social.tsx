"use client"
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT_URL } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_REDIRECT_URL
    })
  }
  return (
    <div className="flex item-center w-full gap-x-2">
        <Button size="lg" variant="outline" className="w-full" onClick={() => onClick("google")}>
            <FcGoogle className="h-5 w-5" />
        </Button>
    </div>
  )
}
// jangan lupa bikin fungsi onclick untuk social login
