import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Cart from './Cart';
// import { MyContext } from '../../../context/MyContext';
import { Provider } from 'react-redux';
import store from '../../../Redux/store';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../Redux/cartSlice';

describe('component Card', () => {
  it('Отображает картинку когда корзина пуста', () => {
    render(
      <Provider store={store}>
        <Cart />;
      </Provider>
    );

    const emptyImage = screen.getByAltText('Empty');
    expect(emptyImage).toBeInTheDocument();
  });
  it('Отображает текст когда корзина пуста', () => {
    render(
      <Provider store={store}>
        <Cart />;
      </Provider>
    );
    const emptyMessage = screen.getByText(/Your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });
  it('Отображает товары в корзине', () => {
    const mockOrders = [
      {
        product: {
          id: 1,
          name: 'Brocolli - 1 Kg',
          price: 120,
          image:
            'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg',
        },
        quantity: 2,
      },
    ];
    const mockStore = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          orders: mockOrders,
          cartOpen: true,
        },
      },
    });

    render(
      <Provider store={mockStore}>
        <Cart />
      </Provider>
    );

    const emptyMessage = screen.queryByText(/Your cart is empty/i);
    expect(emptyMessage).not.toBeInTheDocument();

    const productName = screen.getByText(mockOrders[0].product.name);
    const productPrice = screen.getByText(`$ ${mockOrders[0].product.price}`);
    const productImage = screen.getByAltText(mockOrders[0].product.name);

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
  });
});
