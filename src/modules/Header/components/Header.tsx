import Button from '../../../shared/components/Button.tsx';
import Cart from './Cart.tsx';
import styles from './Header.module.scss';
import { CartContext } from '../context/CartContex.ts';
import { useContext } from 'react';

export default function Header() {

  
  const cartOpenHandler = () => {
    setCartOpen(!cartOpen);
  };

  const { cartOpen, setCartOpen } = useContext(CartContext);
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <span className={styles.headerText}>
            Vegetable{' '}
            <a href="">
              <img src="./src/assets/img/logo.svg" alt="Logo" />
            </a>
          </span>
        </div>
        <div className={styles.cart}>
          <Button
            variant="filled"
            color="green"
            radius="md"
            size="lg"
            onClick={cartOpenHandler}
          >
            <span>Cart</span>
            <img src="./src/assets/img/cart.svg" alt="Cart" />
          </Button>
        </div>
      </div>
      {cartOpen && <Cart />}
    </header>
  );
}
