import { Card as MantineCard, Image } from '@mantine/core';
import Button from '../../../shared/components/Button';
import styles from './Card.module.scss';
import { CartContext } from '../../Header/context/CartContex';
import { useContext } from 'react';
import type { Product } from './CardList';



type CardProps = {
  product: Product;
  loading: boolean;
};

export default function Card({ product, loading }: CardProps) {
  const { setOrders, data } = useContext(CartContext);

  const addToCartHandler = (id: number) => {
    if (!data) return;
    const addCard = data.find((card) => card.id === id);
    if (addCard) {
      setOrders((prev) => [...prev, addCard]);
    }
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <div className={styles.cardLoader}>
          {' '}
          <img src="./src/assets/img/loader.svg" alt="Loader" />
        </div>
      ) : (
        <MantineCard p={0}>
          <Image src={product.image} alt={product.name} />

          <div className={styles.cardMain}>
            <h4>{product.name}</h4>
            <div className={styles.addBlock}>
              <span className={styles.iconMinus}></span>
              <span>1</span>
              <span className={styles.iconPlus}></span>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <h3>$ {product.price}</h3>
            <div className={styles.cardButton}>
              <Button
                onClick={() => addToCartHandler(product.id)}
                className={styles.cardButton}
                color="rgb(231, 250, 235)"
                size="lg"
              >
                <span>Add to cart</span>
                <img src="./src/assets/img/cart2.svg" alt="Cart" />
              </Button>
            </div>
          </div>
        </MantineCard>
      )}
    </div>
  );
}
