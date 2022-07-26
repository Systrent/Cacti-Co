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
    className="h-3/5 w-full bg-no-repeat bg-cover bg-center flex flex-col justify-between items-center border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden"
  >
    <div
    className="h-4/5 w-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center"
    css={css`
      background-image: url(${image});
    `}
    >
    </div>
    <div
      className="px-3 py-2"
    >
      <h2
        css={css`
          font-family: 'Secular One';
          text-shadow: 0 0 4px #062821;
        `}
        className="font-bold tracking-wide text-white text-2xl -mb-1"
      >{name}</h2>
      <p
        className="font-bold tracking-wide text-[#062821] text-sm"
      >{description}</p>
    </div>
  </div>
)}