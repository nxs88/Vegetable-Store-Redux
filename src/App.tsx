import './App.scss';
import Header from './modules/Header/components/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import CardList from './modules/List/components/CardList';
import { useEffect } from 'react';
import { fetchProducts, selectProducts } from './Redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './Redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <MantineProvider>
        <Header />
        <CardList data={products} />
      </MantineProvider>
    </div>
  );
}

export default App;
