import { ChakraProvider, Heading, Center, Box, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const Header = () => {
    const context = useContext(AppContext)
    console.log(context)
    
    return (
        <ChakraProvider>
            <Box minHeight='10vh' backgroundColor='#dca8f9' padding='25px'>
                <Heading>
                    <Center fontSize={"45px"} fontWeight={400}>
                        Dio Bank
                    </Center>
                </Heading>
                <Button>
                    Sair
                </Button>
            </Box>
        </ChakraProvider>
    )
}