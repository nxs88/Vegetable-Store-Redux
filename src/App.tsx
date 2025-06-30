import './App.scss';
import Header from './modules/Header/components/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import CardList from './modules/List/components/CardList';
import useFetch from './hooks/useFetch';
import type { Product } from './types/Product';
import { useState } from 'react';
import { CartContext } from './modules/Header/context/CartContex';

function App() {
  const { data, loading } = useFetch<Product[]>(
    'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
  );
  const [cartOpen, setCartOpen] = useState(false);
  const [orders, setOrders] = useState<Product[]>([]);

  return (
    <div className="container">
      <MantineProvider>
        <CartContext.Provider
          value={{ cartOpen, setCartOpen, orders, setOrders, data }}
        >
          <Header />
          <CardList data={data || []} loading={loading} />
        </CartContext.Provider>
      </MantineProvider>
    </div>
  );
}

export default App;
