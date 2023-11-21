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
    // <ChakraBaseProvider>
    //   <Layout>
    //     <Box padding='25px'>
    //       <Card id={1} paragraph='1' details='1'></Card>
    //     </Box>
    //   </Layout>
    // </ChakraBaseProvider>
    <div>
      <button onClick={() => setValue(value + 1)}> + </button>
      <h1>
        {value}
      </h1>
      <button onClick={() => setValue(value - 1)}> - </button>

      <br/>
      <hr/>

      <button onClick={() => setOtherValue(otherValue + 1)}> + </button>
      <h1>
        {otherValue}
      </h1>
      <button onClick={() => setOtherValue(otherValue - 1)}> - </button>
    </div>
  );
}

export default App;