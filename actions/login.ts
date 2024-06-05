"use server"
import * as z from "zod";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_REDIRECT_URL } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success){
            return {error: "Invalid input"};
    }
    const { email, password} = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_REDIRECT_URL,
        })
    }   catch (error) {
        if (error instanceof AuthError){
          switch (error.type) {
            case "CredentialsSignin":
                return {error: "Invalid credentials"}
            default:
                return {error: "An error occurred"}
          }
        }
        throw error;
    }

};
