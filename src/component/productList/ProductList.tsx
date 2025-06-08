import { AddToCartButton } from "../ui/AddToCartButton";
import { CartItemControlButton } from "../ui/CartItemControlButton";
import type { Product } from "../types/Product";

interface ProductListProps {
  data: Product[];
}

export const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <div key={product.name} className="product-item">
          <picture>
            {/* Desktop: 1024px and above */}
            <source
              media="(min-width: 1024px)"
              srcSet={product.image.desktop}
            />
            {/* Tablet: 768px to 1023px */}
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            {/* Mobile: below 768px */}
            <source srcSet={product.image.mobile} />
            {/* Fallback image if picture element is not supported */}
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
