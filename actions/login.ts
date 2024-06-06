"use server"
import * as z from "zod";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_REDIRECT_URL } from "@/routes";
import { AuthError } from "next-auth";

/**
 * Fungsi untuk melakukan login dengan menggunakan email dan password.
 * 
 * @param values - Objek yang berisi email dan password.
 * @returns Jika login berhasil, akan mengembalikan objek dengan properti "success" yang berisi pesan "Login berhasil".
 *          Jika terjadi kesalahan validasi, akan mengembalikan objek dengan properti "error" yang berisi pesan "Input tidak valid".
 *          Jika terjadi kesalahan saat login, akan mengembalikan objek dengan properti "error" yang berisi pesan "Terjadi kesalahan".
 *          Jika terjadi kesalahan saat login karena kredensial tidak valid, akan mengembalikan objek dengan properti "error" yang berisi pesan "Kredensial tidak valid".
 * @throws Error jika terjadi kesalahan selain kesalahan validasi atau kesalahan saat login.
 */
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
        return {success: "Login successful"}
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
