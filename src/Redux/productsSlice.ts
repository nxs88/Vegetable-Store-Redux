import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = {
  products: [],
  isLoading: false,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch(
        'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Ошибка получения данных:', error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.isLoading;
export default productsSlice.reducer;
