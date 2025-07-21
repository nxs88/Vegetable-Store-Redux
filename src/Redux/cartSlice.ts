import { createSlice } from '@reduxjs/toolkit';
import type { CartProduct } from '../types/Product';
import type { RootState } from './store';

type CartState = {
  orders: CartProduct[];
  cartOpen: boolean;
};

const initialState: CartState = {
  orders: [],
  cartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.orders.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.orders.push({ product, quantity });
      }
    },
    setToggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});
export const { setAddToCart, setToggleCart } = cartSlice.actions;
export const selectToggleCart = (state: RootState) => state.cart.cartOpen;
export const selectOrders = (state: RootState) => state.cart.orders;
export default cartSlice.reducer;
