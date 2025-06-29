import Card from './Card';
import styles from './CardList.module.scss';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CardListProps = {
  loading: boolean;
  data: Product[] | null;
};

export default function CardList({ data, loading }: CardListProps) {
  if (!data) {
    return;
  }
  return (
    <div className={styles.list}>
      <h2>Catalog</h2>
      <div className={styles.container}>
        {data.map((product) => (
          <Card key={product.id} product={product} loading={loading} />
        ))}
      </div>
    </div>
  );
}
