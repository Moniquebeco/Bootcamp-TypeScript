
// import styled from 'styled-components';

import { Card } from './components/Card'
import { Layout } from './components/Layout';

// const Box = styled.div`
// background-color: gray;
// border-radius: 10px;
// padding-left: 15px
// `

function App() {
  return (
    <div>
      <Layout>
        <Card id={1} paragraph='1' details='1'></Card>
      </Layout>
    </div>
  );
}

export default App;

