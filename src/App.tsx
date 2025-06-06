import { Card } from "./component/card/Card";
import { ProductList } from "./component/productList/ProductList";
import type { Product } from "./component/types/Product";
import products from "../data.json";

export default function App() {
  return (
    <>
      <Card>
        <ProductList data={products as Product[]} />
      </Card>
    </>
  );
}
