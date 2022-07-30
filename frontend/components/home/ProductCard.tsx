import { css } from "@emotion/react";

export const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return(
  <div
    className="h-28 max-w-[20%] bg-no-repeat bg-cover bg-center flex flex-col border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden"
  >
    <div
      className="h-full w-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center"
      css={css`
        background-image: url(${product.images.edges[0].node.transformedSrc});
      `}
    >
    </div>
    <div
      className="px-3 py-1"
    >
      <h2
        className="font-bold tracking-wide text-[#062821] text-[13px] leading-3"
      >{product.title}</h2>
    </div>
  </div>
)}