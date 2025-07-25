import decreaseQuantityIcon from "/public/images/icon-decrement-quantity.svg";
import increaseQuantityIcon from "/public/images/icon-increment-quantity.svg";
import { Button } from "../button/Button";
import styles from "./CartItemControlButton.module.css";

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
		<div className={styles.cartItemControl}>
			<Button
				onClick={onDecrease}
				variant="secondary"
				size="small"
				aria-label="decrease quantity"
			>
				<img src={decreaseQuantityIcon} alt="decrease quantity" />
			</Button>
			<span className={styles.cartItemControlQuantity}>{quantity}</span>
			<Button
				onClick={onIncrease}
				variant="secondary"
				size="small"
				aria-label="decrease quantity"
			>
				<img src={increaseQuantityIcon} alt="increase quantity" />
			</Button>
		</div>
	);
};
