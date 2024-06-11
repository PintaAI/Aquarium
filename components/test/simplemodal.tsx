"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";

const SimpleModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "createKelas";

  const handleClose = () => {
    console.log("Closing simple modal");
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl">Simple Modal</DialogTitle>
        </DialogHeader>
        <div>
          <p>This is a simple modal for testing.</p>
          <button onClick={handleClose}>Close Modal</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleModal;
