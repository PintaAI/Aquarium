"use client"
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";


export const Social = () => {
  return (
    <div className="flex item-center w-full gap-x-2">
        <Button size="lg" variant="outline" className="w-full" onClick={() => {}}>
            <FcGoogle className="h-5 w-5" />
        </Button>
    </div>
  )
}
