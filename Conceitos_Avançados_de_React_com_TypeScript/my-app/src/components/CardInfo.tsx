import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string
    content: string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box
            backgroundColor={'white'}
            borderRadius={'20px'}
            minHeight={'120px'}
            width={300}
            padding={4}
        >
            <Text fontSize={'2xl'} fontWeight={700}>
                {mainContent}
            </Text>
            <Text fontSize={'xl'} >
                {content}
            </Text>
        </Box>
    )
}


export default CardInfo;