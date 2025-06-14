import { Button } from "./button/Button";
import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";

interface AddToCartButtonProps {
  onClick: () => void;
}

export const AddToCartButton = ({ onClick }: AddToCartButtonProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        className="add-to-cart-button"
        aria-label="add to cart"
      >
        <img src={addToCartIcon} alt="cart-icon" />
        <p>Add to Cart</p>
      </Button>
    </>
  );
};
