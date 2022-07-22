import { css } from "@emotion/react";
import { ProductProps } from "./MainProduct";

export const ProductCard: React.FC<{ product:ProductProps }> = ({ product }) => {
  return(
  <div
    className="h-20 w-2/10 bg-no-repeat bg-cover bg-center flex flex-col justify-between items-center border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden"
  >
    <div
    className="h-5/6 w-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center"
    css={css`
      background-image: url(${product.image});
    `}
    >
    </div>
    <div>
      <h2
        className="text-xs"
      >{product.name}</h2>
    </div>
  </div>
)}