import { Box, FormControl, Input, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import { Card } from '../components/Card';
import { login } from "../services/login";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <Box padding='25px'>
            <Card>
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
                    </FormControl>
                </Box>
            </Card>
        </Box>
    )
}

export default Home;