import { Card as MantineCard, Image } from '@mantine/core';
import Button from '../../../shared/components/Button';
import styles from './Card.module.scss';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CardProps = {
  product: Product;
  loading: boolean;
};

export default function Card({ product, loading }: CardProps) {
  
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
