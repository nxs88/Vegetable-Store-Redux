import styles from './Cart.module.scss';
import { CartContext } from '../context/CartContex';
import { useContext } from 'react';

export default function Cart() {
  const { orders } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className={styles.cartItem}>
            <img src={order.image} alt={order.name} />
            <div className={styles.cartItemDetails}>
              <h4>{order.name}</h4>
              <h3>$ {order.price}</h3>
            </div>
            <div className={styles.addBlock}>
              <span className={styles.iconMinus}></span>
              <span>1</span>
              <span className={styles.iconPlus}></span>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.cartEmpty}>
          <img src="./src/assets/img/cart_empty.svg" alt="" />
          <p>Your cart is empty</p>
        </div>
      )}

      <div className={styles.total}>
        {orders.length !== 0 && (
          <>
            <span>Total</span>
            <span>Total price</span>{' '}
          </>
        )}
      </div>
    </div>
  );
}
