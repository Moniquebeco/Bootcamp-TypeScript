import { Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (
        <>
            <Center>
                <Text fontSize={"3xl"} fontWeight={"bold"} >
                    Informações da conta
                </Text>
            </Center>
            <Center>
                <Link to={'/conta/0'}>
                    <Text fontSize={"xl"}>
                        Conta
                    </Text>
                </Link>
            </Center>
        </>
    )
}

export default ContaInfo;