import type { Product } from "../types/Product";

interface ProductListProps {
  data: Product[];
}

export const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <div key={product.name} className="product-item">
          <img src={product.image.desktop} alt={product.category} />
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};
