
// import styled from 'styled-components';
import {
  ChakraProvider,
  Input,
  Button,
  Box,
  Center,
  Card,
  Text

} from '@chakra-ui/react';
import { login } from './services/login'; 

// const Box = styled.div`
// background-color: gray;
// border-radius: 10px;
// padding-left: 15px
// `

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#fff' borderRadius='10px' padding='15px'>
          <Center>
            <Text fontSize='3xl'>
              <h1>Login</h1>
            </Text>
          </Center>
          <Input placeholder='Email'></Input>
          <Input placeholder='Password'></Input>
          <Center>
            <Button onClick={login} colorScheme='blue' width='100%' margin='10px 0'>Submit</Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
