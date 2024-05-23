"use client"

import Link from "next/link";
import { Button } from "../ui/button"

interface BackButtonProps {
    herf: string;
    label: string;
}

export const BackButton = ({
    herf,
    label
}: BackButtonProps) => {
    return (
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
            <Link href={herf}>
               {label}
            </Link>
        </Button>
    )
}
// terakhir di sini bikin back button