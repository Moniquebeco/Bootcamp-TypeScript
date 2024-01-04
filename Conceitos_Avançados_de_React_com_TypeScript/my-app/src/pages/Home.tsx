import { Box, FormControl, Input, Center } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Card } from '../components/Card';
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { DButton } from "../components/Button/Button";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if (!loggedIn) {
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        navigate('/conta/0')
    }

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
                            <DButton onClick={() => {validateUser(email)}}>Entrar</DButton>
                        </Center>
                    </FormControl>
                </Box>
            </Card>
        </Box>
    )
}

export default Home;