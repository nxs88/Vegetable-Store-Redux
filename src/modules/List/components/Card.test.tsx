import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Card from './Card';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from '../../../Redux/store';
import cartReducer from '../../../Redux/cartSlice';
import productsReducer from '../../../Redux/productsSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('Card component', () => {
  it('Отображает скелетон при загрузке', () => {
    const mockProduct = {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: '',
    };
    const mockStore = configureStore({
      reducer: {
        products: productsReducer,
        cart: cartReducer,
      },
      preloadedState: {
        products: {
          isLoading: true,
          products: [],
        },
      },
    });

    render(
      <MantineProvider>
        <Provider store={mockStore}>
          <Card product={mockProduct} />
        </Provider>
      </MantineProvider>
    );

    const loader = screen.getByAltText(/Loader/i);
    expect(loader).toBeInTheDocument();
  });
  it('Отображается карточка пот отсутствии загрузки', () => {
    const mockProduct = {
      id: 1,
      name: 'Brocolli',
      price: 10,
      image: 'img',
    };
    render(
      <MantineProvider>
        <Provider store={store}>
          <Card product={mockProduct} />
        </Provider>
      </MantineProvider>
    );
    const productName = screen.getByText(/Brocolli/i);
    const productPrice = screen.getByText(/10/i);
    const productImage = screen.getByAltText(/Brocolli/i);

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
  });
  it('Увеличиваеи и уменьшает счетчик', async () => {
    const mockProduct = {
      id: 1,
      name: 'Brocolli',
      price: 10,
      image: 'img',
    };
    render(
      <MantineProvider>
        <Provider store={store}>
          <Card product={mockProduct} />
        </Provider>
      </MantineProvider>
    );
    const buttons = screen.getAllByRole('button');
    const decrease = buttons[0];
    const increase = buttons[1];
    const counter = screen.getByText('1');

    await userEvent.click(increase);
    expect(counter.textContent).toBe('2');
    await userEvent.click(decrease);
    expect(counter.textContent).toBe('1');
  });
  it('Отображает кнопку добавления в корзину', () => {
    const mockProduct = {
      id: 1,
      name: 'Brocolli',
      price: 10,
      image: 'img',
    };
    render(
      <MantineProvider>
        <Provider store={store}>
          <Card product={mockProduct} />
        </Provider>
      </MantineProvider>
    );
    const button = screen.getByText(/Add to cart/i);
    expect(button).toBeInTheDocument();
  });
});
