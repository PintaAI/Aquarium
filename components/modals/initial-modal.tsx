"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"  
import * as z from "zod" 
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

import { Form,
    FormControl,
    FormLabel,
    FormItem,
    FormField,
    FormMessage
 } from "../ui/form"

 import { Input } from "../ui/input"
 import { Button } from "../ui/button"
 import { useState } from "react"
 import { useEffect } from "react"
 import { FileUpload } from "../ui/file-upload"
import { useRouter } from "next/navigation"


const FormSchema = z.object(
    {
        name: z.string().min(1,{message: "Nama kelas tidak boleh kosong"}),
        image: z.string().min(1,{message: "URL gambar tidak boleh kosong"}),
    }
)

export const InitialModal = () => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();


    useEffect(() => {
        setIsMounted(true);
    },[]);
    
    
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            image: "",
        }
    })

    const isloading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
       try{
            await axios.post("/api/kelas", values);

            form.reset();
            router.refresh();
            window.location.reload();

       } catch (error){
           console.error(error);
       }
    }

    if (!isMounted){
        return null;
    }
    return (
      <Dialog open>
        <DialogContent className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-black dark:text-white p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Buat Kelas
            </DialogTitle>
            <DialogDescription className="text-center text-sm mt-2">
              Buat kelas untuk mengatur tugas dan materi
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8 px-6">
                <div className="flex items-center justify-center text-center">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FileUpload
                            endpoint="kelasImage"
                            value={field.value}
                            onChange={field.onChange}
                          ></FileUpload>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                        Nama Kelas
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isloading}
                          placeholder="Nama Kelas"
                          className="bg-zinc300/50 dark:bg-gray-700 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="bg-gray-100 dark:bg-gray-700 px-6 py-4">
                <Button type="submit" className="w-full" disabled={isloading}>
                  Buat Kelas
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
}