"use client";
import qs from "query-string";
import axios from "axios";
import { useModal } from "@/hooks/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
  FormMessage,
} from "../ui/form"; // Add FormMessage
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { RoomType } from "@prisma/client";
import { DialogDescription } from "@radix-ui/react-dialog";

const FormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nama room tidak boleh kosong" })
    .max(14, { message: "Nama room maksimal 14 karakter" }),
  type: z.nativeEnum(RoomType).default(RoomType.TEXT),
});

export const CreateRoomModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "tambahRoom";
  const router = useRouter();
  const params = useParams();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      type: RoomType.TEXT,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log("Submitting form with values:", values);
    try {
      const url = qs.stringifyUrl({
        url: "/api/room",
        query: {
          kelasId: params?.kelasId,
        },
      });
      const response = await axios.post(url, values);
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
          <DialogTitle className="text-2xl mr-auto font-bold">
            Buat Room
          </DialogTitle>
          <DialogDescription className=" text-zinc-500 mr-auto text-sm mt-2">
            Buat kelas untuk mengatur tugas dan materi
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-700 dark:text-white">
                      Nama Room
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Masukan nama room"
                        className="bg-zinc300/50 dark:bg-secondary border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-700 dark:text-white">
                      Tipe Room
                    </FormLabel>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-white dark:bg-secondary border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0">
                          <SelectValue placeholder="Pilih tipe room" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(RoomType).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 dark:bg-secondary px-6 py-4">
              <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                Buat Room
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
