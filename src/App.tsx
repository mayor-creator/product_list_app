import { useState } from "react";
import products from "../data.json";
import { Card } from "./component/card/Card";
import { Cart } from "./component/cart/Cart";
import { ConfirmOrderModal } from "./component/modal/OrderModal";
import { ProductList } from "./component/productList/ProductList";
import type { Product } from "./component/types/Product";

import "./App.css";

interface CartItems {
	[key: string]: number;
}

export default function App() {
	const [cartItems, setCartItems] = useState<CartItems>({});
	const [isConfirmedOrder, setIsConfirmedOrder] = useState(false);

	const handleAddToCart = (productName: string) => {
		setCartItems((prev) => ({
			...prev,
			[productName]: 1,
		}));
	};

	const handleUpdateQuantity = (productName: string, newQuantity: number) => {
		if (newQuantity === 0) {
			const newCartItems = { ...cartItems };
			delete newCartItems[productName];
			setCartItems(newCartItems);
		} else {
			setCartItems((prev) => ({
				...prev,
				[productName]: newQuantity,
			}));
		}
	};

	const handleRemoveItem = (itemNameToRemove: string) => {
		setCartItems((prevItems) => {
			const updatedItems = { ...prevItems };
			delete updatedItems[itemNameToRemove];
			return updatedItems;
		});
	};

	const handleConfirmOrder = () => {
		setIsConfirmedOrder(true);
	};

	const handleStartNewOrder = () => {
		setCartItems({});
		setIsConfirmedOrder(false);
	};

	const handleCloseModal = () => {
		setIsConfirmedOrder(false);
	};

	/*Convert cartItems object into a list of detailed product entries by
		matching item names with product data and include a fallback values 
		for missing data */
	const cartItemsList = Object.entries(cartItems).map(([name, quantity]) => {
		const product = products.find((product) => product.name === name);
		return {
			name,
			quantity,
			price: product?.price || 0,
			thumbnail: product?.image?.thumbnail || "",
		};
	});

	return (
		<Card className="main-wrapper">
			<ProductList
				data={products as Product[]}
				cartItems={cartItems}
				onAddToCart={handleAddToCart}
				onUpdateQuantity={handleUpdateQuantity}
			/>
			<Card className="cart-list">
				<Cart
					items={cartItemsList}
					onConfirmOrder={handleConfirmOrder}
					onRemoveItem={handleRemoveItem}
				/>
			</Card>
			<ConfirmOrderModal
				items={cartItemsList}
				isVisible={isConfirmedOrder}
				onClose={handleCloseModal}
				onStartNewOrder={handleStartNewOrder}
			></ConfirmOrderModal>
		</Card>
	);
}
