import { Kelas } from "@prisma/client";
import { set } from "zod";
import { create } from "zustand";

export type ModalType = "createKelas" | "invite";


interface ModalData{
    kelas?: Kelas 
}

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}


export const useModal = create<ModalStore>((set) =>({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data ={}) => set({type, isOpen: true}),
    onClose: () => set({type:null, isOpen: false}),
}))