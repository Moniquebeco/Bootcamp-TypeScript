import React from 'react';
import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
    children: React.ReactNode;
    onClick: MouseEventHandler;
}

export const DButton = ({ children, onClick }: IDButton) => {
    return (
        <Button 
            onClick={onClick} 
            colorScheme={"blue"}
            size={"sm"}
            width={"80%"}
            marginTop={"5px"}
        >
            {children}
        </Button>
    );
};





