import carbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";

export const Cart = () => {
  return (
    <>
      <h2>Your Cart</h2>
      <div className="added-item-list">
        <div className="added-item">
          <span>1</span>
          <span>price</span>
          <span>total</span>
        </div>
      </div>
      <div className="order-total">
        <span>Order Total</span>
        <span>Total of items</span>
      </div>
      <div className="carbon-neutral-info">
        <img src={carbonNeutralIcon} alt="carbon neutral icon" />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>
      <button>
        <p>Confirm Order</p>
      </button>
    </>
  );
};
