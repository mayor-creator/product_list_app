import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";

export const AddToCartButton = () => {
  return (
    <>
      <button>
        <img src={addToCartIcon} alt="cart-icon" />
        <p>Add to Cart</p>
      </button>
    </>
  );
};
