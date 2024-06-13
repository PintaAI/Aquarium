// hooks/use-modal-store.ts
import { Kelas } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createKelas" | "invite" | "settings" | "tambahRoom" | "hapusKelas" | "leaveKelas";

interface ModalData {
  kelas?: Kelas;

}
interface ModalStore {
  type: ModalType | null;
  data?: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type,data={}) => {
    console.log("Opening modal:", type);
    set({ isOpen: true, type, data });
  },
  onClose: () => {
    console.log("Closing modal");
    set({ type: null, isOpen: false });
  },
}));
