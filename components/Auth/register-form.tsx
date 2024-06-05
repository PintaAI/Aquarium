"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { 
    Form,
    FormControl,
    FormLabel,
    FormItem,
    FormField,
    FormMessage
 } from "../ui/form"

import { useState, useTransition } from "react"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { CardWrapper } from "./card-wraper"
import { RegisterSchema } from "@/schemas"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { register } from "@/actions/register"
import { FormSuccess } from "../form-success"




export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition();
    const form = useForm <z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            email: "",
            password: "",
            name: "",
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) =>{
        setError("");
        setSuccess("");
        
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    }

    return (
        <CardWrapper headerLabel="silahkan login" backButtonLabel="udah punya akun?" backButtonHref="/auth/login" showSocial={true}>
           <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) =>(
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isPending} placeholder="contoh@email.com" type="email"/>
                                    </FormControl>
                                    
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) =>(
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isPending} placeholder="Password" type="password" />
                                    </FormControl>
                                    
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) =>(
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isPending} placeholder="nama kamu" />
                                    </FormControl>
                                    
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button disabled={isPending} type="submit" className="w-full">
                        Daftar
                    </Button>
                </form>
            </Form> 
        </CardWrapper>
    )
}

export default RegisterForm