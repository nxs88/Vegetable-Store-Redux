import Card from './Card';
import styles from './CardList.module.scss';
import type { Product } from '../../../types/Product';

type CardListProps = {
  data: Product[] | null;
};

export default function CardList({ data }: CardListProps) {
  if (!data) {
    return;
  }
  return (
    <div className={styles.list}>
      <h2>Catalog</h2>
      <div className={styles.container}>
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
