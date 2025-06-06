import { Card } from "./component/card/Card";
import { ProductList } from "./component/productList/ProductList";
import products from "../data.json";

export default function App() {
  return (
    <>
      <Card>
        <ProductList data={products} />
      </Card>
    </>
  );
}
