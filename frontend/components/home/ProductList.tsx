import useSWR from "swr";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { data } = useSWR("/products", {
    refreshInterval: 2000,
  });

  const productsData = data?.data.products.edges;

  return(
    <div
      className="flex gap-3"
    >
      {productsData?.length > 0 &&
        productsData.map((edge, index) => (
          <ProductCard product={edge.node} key={index} />
        ))
      }
    </div>
)};
