import Button from '../../../shared/components/Button.tsx';
import styles from './Header.module.scss';

export default function Header() {
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
          <Button variant="filled" color="green" radius="md" size="lg">
            <span>Cart</span>
            <img src="./src/assets/img/cart.svg" alt="Cart" />
          </Button>
        </div>
      </div>
    </header>
  );
}
