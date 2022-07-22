import { css } from "@emotion/react";

export interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export const MainProduct: React.FC<ProductProps> = ({ image, name, description, price}) => {
  return(
  <div
    className="h-2/3 w-full bg-no-repeat bg-cover bg-center flex flex-col justify-between items-center border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden"
  >
    <div
    className="h-5/6 w-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center"
    css={css`
      background-image: url(${image});
    `}
    >
    </div>
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
)}