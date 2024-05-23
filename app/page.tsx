import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginButton } from "@/components/Auth/login-button";

//di sini adalah landing button
const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">     
      <LoginButton mode="modal">
        <Button className="bg-pink-500 hover:bg-pink-600">Daftar</Button>
      </LoginButton>   
    </div>
  )
}

export default page