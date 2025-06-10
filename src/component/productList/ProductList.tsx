import { useState } from "react";

import { AddToCartButton } from "../ui/AddToCartButton";
import { CartItemControlButton } from "../ui/CartItemControlButton";
import type { Product } from "../types/Product";

interface ProductListProps {
  data: Product[];
}

interface CartItems {
  [key: string]: number;
}

export const ProductList = ({ data }: ProductListProps) => {
  const [cartItems, setCartItems] = useState<CartItems>({});

  const handleAddItemToCart = (productName: string) => {
    setCartItems((prev) => ({
      ...prev,
      [productName]: 1,
    }));
  };

  const handleIncreaseQuantity = (productName: string) => {
    setCartItems((prev) => ({
      ...prev,
      [productName]: prev[productName] + 1,
    }));
  };

  const handleDecreaseQuantity = (productName: string) => {
    if (cartItems[productName] === 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[productName];
      setCartItems(newCartItems);
    } else {
      setCartItems((prev) => ({
        ...prev,
        [productName]: prev[productName] - 1,
      }));
    }
  };

  return (
    <div className="product-list">
      {data.map((product) => (
        <div key={product.name} className="product-item">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={product.image.desktop}
            />
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            <source srcSet={product.image.mobile} />
            <img src={product.image.mobile} alt={product.name} loading="lazy" />
          </picture>
          {cartItems[product.name] ? (
            <CartItemControlButton
              quantity={cartItems[product.name]}
              onDecrease={() => handleDecreaseQuantity(product.name)}
              onIncrease={() => handleIncreaseQuantity(product.name)}
            />
          ) : (
            <AddToCartButton
              onClick={() => handleAddItemToCart(product.name)}
            />
          )}
          <div className="product-details">
            <p className="product-category">{product.category}</p>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
