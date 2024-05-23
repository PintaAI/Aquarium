import * as z from 'zod';
//ini adlah schema untuk login buat validasi pake zod
export const LoginSchema = z.object({
    email: z.string().email({
        message: "email tidak valid"
    }),
    password: z.string().min(1, {
        message: "password dibutuhkan"
    })
});