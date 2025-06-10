import increaseQuantityIcon from "../../assets/images/icon-increment-quantity.svg";
import decreaseQuantityIcon from "../../assets/images/icon-decrement-quantity.svg";

interface CartItemControlButtonProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const CartItemControlButton = ({
  quantity,
  onDecrease,
  onIncrease,
}: CartItemControlButtonProps) => {
  return (
    <>
      <button onClick={onDecrease}>
        <img src={decreaseQuantityIcon} alt="decrease quantity" />
      </button>
      <p>{quantity}</p>
      <button onClick={onIncrease}>
        <img src={increaseQuantityIcon} alt="increase quantity" />
      </button>
    </>
  );
};
