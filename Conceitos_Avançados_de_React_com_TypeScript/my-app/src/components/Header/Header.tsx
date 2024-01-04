import { Heading, Center, Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const logout = () => {
        {
            setIsLoggedIn(false)
            navigate('/')

        }
    }

    return (
        <Flex backgroundColor='#dca8f9' padding='5px'>
            <Box>
                <Heading>
                    <Center fontSize={"45px"} fontWeight={400}>
                        Dio Bank
                    </Center>
                </Heading>


            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}>
                            Sair
                        </Button>
                    </>

                )
            }
        </Flex>
    )
}