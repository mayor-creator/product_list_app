import orderConfirmedIcon from "../../assets/images/icon-order-confirmed.svg";
import { Button } from "../ui/button/Button";
import styles from "./OrderModal.module.css";

interface CartItem {
	name: string;
	quantity: number;
	price: number;
	thumbnail: string;
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

	const calculateTotal = (items: CartItem[]) => {
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const total = calculateTotal(items);

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalWrapper}>
				<div className={styles.titleInfoContainer}>
					<div className={styles.modalInfoContainer}>
						<img
							src={orderConfirmedIcon}
							alt="check mark icon"
							className={styles.modalImage}
						/>
						<button
							type="button"
							onClick={onClose}
							className={styles.modalCloseButton}
						>
							X
						</button>
					</div>
					<div>
						<h1 className={styles.modalTitle}>Order Confirmed</h1>
						<p className={styles.modalMessage}>We hope you enjoy your food!</p>
					</div>
				</div>

				<div className={styles.modalItemContainer}>
					{items.length > 0
						? items.map((item) => (
								<>
									<div key={item.name} className={styles.modalItem}>
										<div className={styles.thumbnailImageContainer}>
											<img
												src={item.thumbnail}
												alt={item.name}
												width="48px"
												height="48px"
											/>
											<div className={styles.thumbnailItemChild}>
												<p className={styles.modalItemName}>{item.name}</p>
												<div className={styles.modalItemQuantityContainer}>
													<span className={styles.modalItemQuantity}>
														{item.quantity}x
													</span>
													<span className={styles.modalItemPrice}>
														${item.price.toFixed(2)}
													</span>
												</div>
											</div>
										</div>
										<div className={styles.modalItemChildContainer}>
											<span className={styles.modalItemTotal}>
												${(item.quantity * item.price).toFixed(2)}
											</span>
										</div>
									</div>
									<div>
										<hr className={styles.modalDivider} />
									</div>
								</>
							))
						: null}
					<div className={styles.modalTotal}>
						<span className={styles.orderTotalTitle}>Order Total</span>
						<span className={styles.orderTotalPrice}>${total.toFixed(2)}</span>
					</div>
				</div>

				<div className={styles.modalButtonContainer}>
					<Button variant="tertiary" size="medium" onClick={onStartNewOrder}>
						Start New Order
					</Button>
				</div>
			</div>
		</div>
	);
};
