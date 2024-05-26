"use server"
import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success){
            return {error: "Invalid input"};
    }
    console.log(values);
    return { success: "Email berhasil dikirim" };
};

// terakhir di sini bikin fungsi login. next adlah menyelesaikan register form dan membuat agar bisa konek ke database