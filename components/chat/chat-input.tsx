"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
// Asumsi Plus adalah icon dari library yang digunakan
 // Import icon sesuai library yang Anda gunakan

interface ChatInputProps {
  apiUrl: string;
  query: Record<string, any>;
  name: string;
  type: "room";
}

const formSchema = z.object({
  content: z.string().min(1),
});

export const ChatInput = ({ apiUrl, query, name, type }: ChatInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center w-full"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => {}}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-[24px] w-[24px] bg-primary dark:bg-white hover:bg-primary-500 dark:hover:bg-primary-500 rounded-full flex items-center justify-center"
                  >
                    <Plus size={24} className="dark:bg-background"/>
                  </button>
                  <Input
                    {...field}
                    placeholder={`Kirim message ke ${name}`}
                    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    disabled={isLoading}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
