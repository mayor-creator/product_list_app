import type { Product } from "../types/Product";
import { AddToCartButton } from "../ui/AddToCartButton";
import { CartItemControlButton } from "../ui/CartItemControl/CartItemControlButton";

import styles from "./ProductList.module.css";

interface ProductListProps {
	data: Product[];
	onAddToCart: (productName: string) => void;
	onUpdateQuantity: (productName: string, newQuantity: number) => void;
	cartItems: CartItems;
}

interface CartItems {
	[key: string]: number;
}

export const ProductList = ({
	data,
	cartItems,
	onAddToCart,
	onUpdateQuantity,
}: ProductListProps) => {
	return (
		<div className="productListContainer">
			<section>
				<h1>Desserts</h1>
			</section>
			<section className={styles.productList}>
				{data.map((product) => (
					<article key={product.name} className="product-item">
						<div className={styles.productImageContainer}>
							<picture>
								<source
									media="(min-width: 1024px)"
									srcSet={product.image.desktop}
								/>
								<source
									media="(min-width: 768px)"
									srcSet={product.image.tablet}
								/>
								<source srcSet={product.image.mobile} />
								<img
									className={styles.productImageItem}
									src={product.image.mobile}
									alt={product.name}
									loading="lazy"
								/>
							</picture>
							<div className={styles.productButtonOverlay}>
								{cartItems[product.name] ? (
									<CartItemControlButton
										quantity={cartItems[product.name]}
										onDecrease={() =>
											onUpdateQuantity(
												product.name,
												cartItems[product.name] - 1,
											)
										}
										onIncrease={() =>
											onUpdateQuantity(
												product.name,
												cartItems[product.name] + 1,
											)
										}
									/>
								) : (
									<AddToCartButton onClick={() => onAddToCart(product.name)} />
								)}
							</div>
						</div>

						<div className="product-details">
							<p className={styles.productCategory}>{product.category}</p>
							<p className={styles.productName}>{product.name}</p>
							<p className={styles.productPrice}>${product.price.toFixed(2)}</p>
						</div>
					</article>
				))}
			</section>
		</div>
	);
};
