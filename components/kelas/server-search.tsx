"use client"

import React from "react";

interface ServerSearchProps {
    data:{
        label: string;
        type: "room" | "member";
        data: {
            icon: React.ReactNode;
            name: string;
            id: string;
        }[]| undefined
    }[]
}

export const ServerSearch = ({
    data
}: ServerSearchProps) => {
    return (
        <div>
            
        </div>
    )
}