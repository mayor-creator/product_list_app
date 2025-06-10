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
      <div>
        <button onClick={onDecrease}>
          <img src={decreaseQuantityIcon} alt="decrease quantity" />
        </button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>
          <img src={increaseQuantityIcon} alt="increase quantity" />
        </button>
      </div>
    </>
  );
};
