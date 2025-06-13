import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";
import { Button } from "./button/Button";

interface AddToCartButtonProps {
  onClick: () => void;
}

export const AddToCartButton = ({ onClick }: AddToCartButtonProps) => {
  return (
    <>
      <Button onClick={onClick}>
        <img src={addToCartIcon} alt="cart-icon" />
        <p>Add to Cart</p>
      </Button>
    </>
  );
};
