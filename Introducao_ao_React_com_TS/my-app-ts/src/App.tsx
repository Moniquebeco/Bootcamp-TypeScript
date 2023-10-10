
import { Card } from './components/Card'
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
        <Card 
          id={1}
          paragraph='TypeScript'
          details='TS para Backend e Frontend'
        />
        <Card 
          id={2}
          paragraph='HTML'
          details='HTML para Frontend'
        />
        <Card 
          id={3}
          paragraph='SQL'
          details='SQL para banco de dados'
        />
    </Layout>
  );
}

export default App;
