"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useModal } from "@/hooks/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormLabel, FormItem, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FileUpload } from "../ui/file-upload";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Nama kelas tidak boleh kosong" }),
  imageUrl: z.string().min(1, { message: "URL gambar tidak boleh kosong" }),
});

export const SettingsKelas = () => {
  const { isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === "settingsKelas";
  const { kelas } = data ?? {};
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });


  useEffect(() => {
    if (kelas) {
      form.setValue("name", kelas.name);
      form.setValue("imageUrl", kelas.imageUrl ?? "");
    }
  }, [kelas, form]);
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log("Submitting form with values:", values);
    try {
      const response = await axios.patch(`/api/kelas/${kelas?.id}`, values);
      console.log("Response from server:", response.data);

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleClose = () => {
    console.log("Closing modal");
    form.reset();
    onClose();
  };

  console.log("Rendering CreateKelasModal with state:", {
    isModalOpen,
    isLoading,
  });

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-black dark:text-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit Kelas
          </DialogTitle>
          <DialogDescription className=" text-zinc-800 text-center text-sm mt-2">
            Edit kelas untuk mengatur tugas dan materi
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                          endpoint="kelasImage"
                          value={field.value}
                          onChange={field.onChange}
                        />
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-700 dark:text-white">
                      Nama Kelas
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Nama Kelas"
                        className="bg-zinc300/50 dark:bg-secondary border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 dark: bg-secondary px-6 py-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
