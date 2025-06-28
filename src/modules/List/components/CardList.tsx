import Card from './Card';
import styles from './CardList.module.scss'

export default function CardList() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  );
}
