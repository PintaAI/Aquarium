"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useSearchParams } from "next/navigation"
import { 
    Form,
    FormControl,
    FormLabel,
    FormItem,
    FormField,
    FormMessage
 } from "../ui/form"

import { useTransition,useState } from "react"
import { Input } from "../ui/input"
import { CardWrapper } from "./card-wraper"
import { LoginSchema } from "@/schemas"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { login } from "@/actions/login"




export const LoginForm = () => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "akun belum terhubung dengan akun sosial" : undefined;
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition();
    const form = useForm <z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",   
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
             .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
              
                
             });
        });
    }

    return (
        <CardWrapper headerLabel="silahkan login" backButtonLabel="ga punya akun ya?" backButtonHref="/auth/register" showSocial>
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
                                    <FormMessage/>
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
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error || urlError}/>
                    <FormSuccess message={success}/>
                    <Button disabled={isPending} type="submit" className="w-full" variant="info">
                        Login
                    </Button>
                </form>
            </Form> 
        </CardWrapper>
    )
}

export default LoginForm