import { createContext } from 'react';
import type { Product } from '../../../types/Product';

type CartContextType = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orders: Product[];
  setOrders: React.Dispatch<React.SetStateAction<Product[]>>;
  data: Product[] | null;
};

export const CartContext = createContext<CartContextType>({
  cartOpen: false,
  setCartOpen: () => {},
  orders: [],
  setOrders: () => {},
  data: null,
});
