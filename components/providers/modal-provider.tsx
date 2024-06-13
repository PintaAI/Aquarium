"use client";

import { useEffect, useState } from "react";
import { CreateKelasModal } from "../modals/create-kelas-modal";
import { InviteModal } from "../modals/invite-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true);
    }, []);


    if (!isMounted) {
        return null;
    }

    return (
      <>
        <CreateKelasModal />
        <InviteModal /> 
      </>
    );
}