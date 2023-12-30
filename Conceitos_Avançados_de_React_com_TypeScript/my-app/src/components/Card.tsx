import { Box } from '@chakra-ui/react';

interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({ children }: any) => {
    return (
        <Box backgroundColor={'white'} borderRadius={'30px'} padding={'10px 0'}>
            { children }
        </Box>
    )
}
