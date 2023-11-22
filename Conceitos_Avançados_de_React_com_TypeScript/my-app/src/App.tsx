import { useState } from 'react';
import { ChakraBaseProvider, Box, Flex } from '@chakra-ui/react';
import { Card } from './components/Card'
import { Layout } from './components/Layout';

// import styled from 'styled-components';
// const Box = styled.div`
// background-color: gray;
// border-radius: 10px;
// padding-left: 15px
// `

function App() {
  const [value, setValue] = useState(0)
  const [otherValue, setOtherValue] = useState(1)

  return (
    <ChakraBaseProvider>
      <Layout>
        <Box padding='25px'>
          <Card id={1} paragraph='1' details='1'></Card>
        </Box>
      </Layout>
    </ChakraBaseProvider>
  );
}

export default App;