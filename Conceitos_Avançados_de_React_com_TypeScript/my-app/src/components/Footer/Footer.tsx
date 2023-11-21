import { ChakraProvider, Heading, Center, Box } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <ChakraProvider>
            <Box minHeight='10vh' backgroundColor='#dca8f9' padding='25px'>
                <Center>
                    Footer | 2023 &copy;
                </Center>
            </Box>
        </ChakraProvider>
    )
}