import './Header.css'
import { ChakraProvider, Heading, Center, Box } from '@chakra-ui/react'

export const Header = () => {
    return (
        <ChakraProvider>
            <Box minHeight='10vh' backgroundColor='#dca8f9' padding='25px'>
                <Heading>
                    <Center>
                        Dio Bank
                    </Center>
                </Heading>
            </Box>
        </ChakraProvider>
    )
}