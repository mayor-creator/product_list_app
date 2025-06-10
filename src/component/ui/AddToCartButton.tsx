import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";

interface AddToCartButtonProps {
  onClick: () => void;
}

export const AddToCartButton = ({ onClick }: AddToCartButtonProps) => {
  return (
    <>
      <button onClick={onClick}>
        <img src={addToCartIcon} alt="cart-icon" />
        <p>Add to Cart</p>
      </button>
    </>
  );
};
