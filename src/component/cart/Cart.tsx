import carbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";

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
    <section className="cart">
      <h2>Your Cart {items.length}</h2>

      <div className="cart__items">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.name} className="cart__item">
              <p className="cart__item-name">{item.name}</p>
              <span className="cart__item-quantity">{item.quantity}</span>
              <span className="cart__item-price">${item.price.toFixed(2)}</span>
              <span className="cart__item-total">
                ${(item.quantity * item.price).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p className="cart__empty">Your cart is empty</p>
        )}
      </div>

      <div className="cart__total">
        <span>Order Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="cart__info">
        <img
          src={carbonNeutralIcon}
          alt="Carbon neutral delivery"
          width="24"
          height="24"
        />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
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
