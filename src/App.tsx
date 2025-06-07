import { ProductList } from "./component/productList/ProductList";
import type { Product } from "./component/types/Product";
import products from "../data.json";

export default function App() {
  return (
    <>
      <ProductList data={products as Product[]} />
    </>
  );
}
