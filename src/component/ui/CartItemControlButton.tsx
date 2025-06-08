declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.svg";
declare module ".gif";

import increaseQuantityIcon from "../../assets/images/icon-increment-quantity.svg";
import decreaseQuantityIcon from "../../assets/images/icon-decrement-quantity.svg";

export const CartItemControlButton = () => {
  return (
    <>
      <button>
        <img src={decreaseQuantityIcon} alt="decrease-icon" />
        <p>0</p>
        <img src={increaseQuantityIcon} alt="increase-icon" />
      </button>
    </>
  );
};
