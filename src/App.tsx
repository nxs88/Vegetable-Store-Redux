import './App.scss';
import Header from './modules/Header/components/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import CardList from './modules/List/components/CardList';
import useFetch from './hooks/useFetch';
import type {Product} from './modules/List/components/CardList'

function App() {
   const { data, loading } = useFetch<Product[]>(
    'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
  );
  return (
    <div className="container">
      <MantineProvider>
        <Header />
        <CardList data={data || []} loading={loading}/>
      </MantineProvider>
    </div>
  );
}

export default App;
