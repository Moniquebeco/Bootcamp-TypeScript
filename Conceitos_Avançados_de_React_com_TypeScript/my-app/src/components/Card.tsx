import { ChakraProvider, Box, FormControl, Input, Button, Center } from "@chakra-ui/react";
import { login } from "../services/login";
import { useState, useEffect } from "react";
import { DButton } from './Button/Button';
import { api } from "../api";

interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [userData, setUserData] = useState<null | userData>()

    interface userData {
        email: string
        password: string
        name: string
    }

    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api
            setUserData(data)
        }

        getData()
    }, [])

    console.log(userData)

    return (
        <ChakraProvider>
            <Center fontSize={'25px'}>
                <h1>Faça o login</h1>
            </Center>
            <p>{userData?.name}</p>
            <Box padding={'15px 30px'} display={'flex'} borderRadius={'20px'}>
                <FormControl alignContent={'space-evenly'}>
                    <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}></Input>
                    <Input placeholder="Senha" type="password" margin={'10px 0 20px 0'} value={password}></Input>
                    <Center>
                        <Button onClick={() => login(email)} colorScheme="blue" width={'90%'}>Login</Button>
                    </Center>
                </FormControl>
            </Box>
        </ChakraProvider>
    )
}
