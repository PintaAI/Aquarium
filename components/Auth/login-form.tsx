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

import { useTransition } from "react"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { CardWrapper } from "./card-wraper"
import { LoginSchema } from "@/schemas"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { login } from "@/actions/login"




export const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const form = useForm <z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
        startTransition(() => {
            login(values)
        });
    }

    return (
        <CardWrapper headerLabel="silahkan login" backButtonLabel="ga punya akun ya?" backButtonHref="/auth/register" showSocial={true}>
           <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-6">
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
                    </div>
                    <FormError message=""/>
                    <Button disabled={isPending} type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form> 
        </CardWrapper>
    )
}

export default LoginForm