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


const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-[350px] bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg">
        <CardHeader className="flex justify-between px-4 py-2">
        <div className="flex space-x-4">
            <button className="text-lg text-pink-500 border-b-2 border-pink-500 pb-1 focus:outline-none">
              Sign In
            </button>
            <button className="text-lg text-gray-500 hover:text-pink-500 focus:outline-none">
              Sign Up
            </button>
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <form>
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username" className="text-pink-500">
                  Username
                </Label>
                <Input
                  id="username"
                  className="border-b-2 border-pink-500 bg-transparent text-white focus:outline-none"
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-pink-500">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  className="border-b-2 border-pink-500 bg-transparent text-white focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 accent-pink-500"
                />
                <Label htmlFor="remember" className="text-white">
                  Keep me signed in
                </Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center px-4 py-2 space-y-2">
          <Button className="w-full bg-pink-500 hover:bg-pink-600">Sign In</Button>
          <a href="#" className="text-sm text-pink-500 hover:underline">
            Forgot Password?
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}

export default page