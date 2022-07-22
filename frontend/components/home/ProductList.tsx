import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const [products_data, setProductsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      setProductsData(res.data);
    })
  }, []);



  return(
    <div
      className="flex gap-3"
    >
      {products_data.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
)};
