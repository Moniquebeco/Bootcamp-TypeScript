import { ChakraProvider, Box, FormControl, Input, Button, Center } from "@chakra-ui/react";
import { login } from "../services/login";
import { useState } from "react";
import { DButton } from './Button/Button';

interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logar = () => {
        alert(email)
    }

    console.log('Email: ', email);
    console.log('Senha: ', password);

    return (
        <ChakraProvider>
            <Center fontSize={'25px'}>
                <h1>Faça o login</h1>
            </Center>
            <Box padding={'15px 30px'} display={'flex'} borderRadius={'20px'}>
                <FormControl alignContent={'space-evenly'}>
                    <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}></Input>
                    <Input placeholder="Senha" type="password" margin={'10px 0 20px 0'} value={password}></Input>

                    <Center>
                        <Button onClick={() => login(email)} colorScheme="blue" width={'90%'}>Login</Button>
                    </Center>
                    {/* <Center>
                        <DButton onClick={() => login(email)}>Login</DButton>
                    </Center> */}
                </FormControl>
            </Box>
        </ChakraProvider>
    )
}
