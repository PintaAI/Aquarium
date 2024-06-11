// hooks/use-modal-store.ts
import { create } from "zustand";

export type ModalType = "createKelas";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => {
    console.log("Opening modal:", type);
    set({ isOpen: true, type });
  },
  onClose: () => {
    console.log("Closing modal");
    set({ type: null, isOpen: false });
  },
}));
