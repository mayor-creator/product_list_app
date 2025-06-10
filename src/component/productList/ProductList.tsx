import { useState } from "react";

import { AddToCartButton } from "../ui/AddToCartButton";
import { CartItemControlButton } from "../ui/CartItemControlButton";
import type { Product } from "../types/Product";

interface ProductListProps {
  data: Product[];
}

export const ProductList = ({ data }: ProductListProps) => {
  const [addItemToCart, setItemToCart] = useState<boolean>(false);
  const [itemQuantity, setItemQuantity] = useState<number>(1);

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
          <AddToCartButton />
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>${product.price.toFixed(2)}</p>
          <CartItemControlButton />
        </div>
      ))}
    </div>
  );
};
