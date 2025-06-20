import carbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";
import styles from "./Cart.module.css";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartProps {
  items: CartItem[];
  onConfirmOrder: () => void;
}

export const Cart = ({ items = [], onConfirmOrder }: CartProps) => {
  const calculateTotal = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const total = calculateTotal(items);

  return (
    <section className={styles.cart}>
      <h2 className={styles.cartTitle}>Your Cart ({items.length})</h2>

      <div className={styles.cartItemContainer}>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.name} className={styles.cartItem}>
              <p className={styles.cartItemName}>{item.name}</p>
              <div className={styles.cartItemChild}>
                <span className={styles.cartItemQuantity}>
                  {item.quantity}x
                </span>
                <span className={styles.cartItemPrice}>
                  ${item.price.toFixed(2)}
                </span>
                <span className={styles.cartItemTotal}>
                  ${(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="cart__empty">Your cart is empty</p>
        )}
      </div>

      <div className={styles.cartTotal}>
        <span className={styles.orderTotalTitle}>Order Total</span>
        <span className={styles.orderTotalPrice}>${total.toFixed(2)}</span>
      </div>

      <div className="cart__info">
        <img
          src={carbonNeutralIcon}
          alt="Carbon neutral delivery"
          width="24"
          height="24"
        />
        <span>
          This is a <strong>carbon-neutral</strong> delivery
        </span>
      </div>

      <button
        className="cart__submit"
        onClick={onConfirmOrder}
        disabled={items.length === 0}
        type="button"
        aria-label="Confirm order"
      >
        Confirm Order
      </button>
    </section>
  );
};
