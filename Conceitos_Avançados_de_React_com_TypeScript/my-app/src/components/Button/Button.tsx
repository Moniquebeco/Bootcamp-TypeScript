import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button
            onClick={onClick}
            colorScheme={"blue"}
            size={"sm"}
            width={"80%"}
            marginTop={"5px"}

        >
            Entrar
        </Button>
    )
}




