import { AddToCartButton } from "../ui/AddToCartButton";
import { CartItemControlButton } from "../ui/CartItemControlButton";
import type { Product } from "../types/Product";

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
    <div className="product-list">
      <h1>Desserts</h1>
      {data.map((product) => (
        <div key={product.name} className="product-item">
          <div className="product-image">
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
                src={product.image.mobile}
                alt={product.name}
                loading="lazy"
              />
            </picture>

            {cartItems[product.name] ? (
              <CartItemControlButton
                quantity={cartItems[product.name]}
                onDecrease={() =>
                  onUpdateQuantity(product.name, cartItems[product.name] - 1)
                }
                onIncrease={() =>
                  onUpdateQuantity(product.name, cartItems[product.name] + 1)
                }
              />
            ) : (
              <AddToCartButton onClick={() => onAddToCart(product.name)} />
            )}
          </div>

          <div className="product-details">
            <p className="product-category">{product.category}</p>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
