import { login } from "../services/login"
import { ChakraProvider, Box, FormControl, Input, Button, Center } from "@chakra-ui/react"

export const Login = () => {
    return (
        <ChakraProvider>
            <Box padding={'15px 30px'} display={'flex'}>
                <FormControl alignContent={'space-evenly'}>
                    <Input placeholder="Email" type="email"></Input>
                    <Input placeholder="Senha" type="password" margin={'10px 0 20px 0'}></Input>
                    <Center>
                        <Button onClick={() => login('Monique')} colorScheme="blue" width={'90%'}>Login</Button>
                    </Center>
                </FormControl>
            </Box>
        </ChakraProvider>
    )
}