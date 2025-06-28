import { Card as MantineCard, Image } from '@mantine/core';
import Button from '../../../shared/components/Button';
import styles from './Card.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <MantineCard shadow="sm" padding="lg" radius="md" withBorder>
        <Image
          src="https://source.unsplash.com/random/300x200/?broccoli"
          alt="Broccoli"
        />

        <div className={styles.cardMain}>
          <h4>Broccoli</h4>
          <span>1 kg</span>
          <span className={styles.iconMinus}></span>1
          <span className={styles.iconPlus}></span>
        </div>

        <div className={styles.cardFooter}>
          <h4>$120</h4>
          <div className={styles.cardButton}>
            <Button
              className={styles.cardButton}
              color="rgb(231, 250, 235)"
              radius="md"
              size="lg"
            >
              <span>Add to cart</span>
              <img src="./src/assets/img/cart2.svg" alt="Cart" />
            </Button>
          </div>
        </div>
      </MantineCard>
    </div>
  );
}
