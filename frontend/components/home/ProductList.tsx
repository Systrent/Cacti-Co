import useSWR from "swr";
import { useToken } from "../../lib/tokenContext";
import { Spinner } from "../shared/Spinner";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { data } = useSWR("/products", {
    refreshInterval: 4000,
  });

  const productsData = data?.data.products.edges;
  console.log(productsData);

  const { auth0Token } = useToken();
  const token = auth0Token.value;

  return(
    <div
      className="flex gap-3 w-full h-28"
    >
      {token && productsData?.length > 0 &&
        productsData.map((edge, index) => (
          <ProductCard product={edge.node} key={index} />
        ))
      }
      {!token &&
        <Spinner />
      }
    </div>
)};
