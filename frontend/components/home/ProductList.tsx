import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const [products_data, setProductsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setProductsData(res.data.data.products.edges[0].node);
    })
  }, []);
  
  console.log(products_data);
  return(
    <div
      className="flex gap-3"
    >
      {/* FIXME: Check map funtion */}
      {products_data.length > 0 &&
        products_data.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))
      }
      
      {/* {products_data.length > 0 && <ProductCard product={products_data} />} */}
    </div>
)};
