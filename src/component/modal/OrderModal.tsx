import orderConfirmedIcon from "../../assets/images/icon-order-confirmed.svg";
import { Button } from "../ui/button/Button";

interface CartItem {
	name: string;
	quantity: number;
	price: number;
}

interface ConfirmOrderModalProps {
	items: CartItem[];
	isVisible: boolean;
	onClose: () => void;
	onStartNewOrder: () => void;
}

export const ConfirmOrderModal = ({
	items,
	isVisible,
	onClose,
	onStartNewOrder,
}: ConfirmOrderModalProps) => {
	if (!isVisible) {
		return null;
	}

	return (
		<>
			<img src={orderConfirmedIcon} alt="check mark icon" />
			<div>
				<button type="button" onClick={onClose}>
					X
				</button>
			</div>
			<h1>Order Confirmed</h1>
			<p>We hope you enjoy your food!</p>

			<div>
				{items.length > 0
					? items.map((item) => (
							<div key={item.name}>
								<p>{item.name}</p>
								<div>
									<span>{item.quantity}x</span>
									<span>${item.price.toFixed(2)}</span>
									<span>${(item.quantity * item.price).toFixed(2)}</span>
								</div>
								<hr />
							</div>
						))
					: null}
			</div>
			<Button variant="primary" size="medium" onClick={onStartNewOrder}>
				Start New Order
			</Button>
		</>
	);
};
