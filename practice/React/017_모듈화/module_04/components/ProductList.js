import ProductInfo from "./ProductInfo";
import productData from "../data/data.js";

function ProductList() {
  console.log(productData);
  return (
    <ul>
      {productData
        .filter((v) => v.price <= 10000)
        .map((i) => (
          <ProductInfo item={i} key={i.id} />
        ))}
    </ul>
  );
}

export default ProductList;
