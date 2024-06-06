"use server"
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

import { RegisterSchema } from "@/schemas";

/**
 * Mendaftarkan pengguna baru dengan nilai-nilai yang diberikan.
 * @param values Nilai-nilai yang akan digunakan untuk mendaftarkan pengguna baru.
 * @returns Objek yang berisi pesan kesalahan jika terjadi kesalahan, atau pesan keberhasilan jika pendaftaran berhasil.
 */
export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success){
            return {error: "Invalid input"};
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where: {
            email
        
        }
    });

    if (existingUser){
        return {error: "User already exists"};
    }
    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    })

    // send verification email
    console.log(values);
    return { success: "Email berhasil dikirim" };
};

// terakhir di sini bikin fungsi login. next adlah menyelesaikan register form dan membuat agar bisa konek ke database