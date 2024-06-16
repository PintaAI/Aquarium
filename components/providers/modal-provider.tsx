"use client";

import { useEffect, useState } from "react";
import { CreateKelasModal } from "../modals/create-kelas-modal";
import { InviteModal } from "../modals/invite-modal";
import { SettingsKelas } from "../modals/setings-modal";
import { CreateRoomModal } from "../modals/create-room-modal";

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
        <SettingsKelas />
        <CreateRoomModal />
      </>
    );
}