import tw from 'twin.macro';
import { css } from '@emotion/react';

export interface ProductProps {
    image: string;
    name: string;
    description: string;
    price: number;
}

export const MainProduct: React.FC<ProductProps> = ({ image, name, description, price }) => {
    return (
        <>
            <div tw='h-full w-full flex flex-col justify-between items-center border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden'>
                <div tw='h-3/4 w-full'>
                    <img src={image} tw='h-full w-full object-cover items-center' />
                </div>
                <div tw='w-full h-full flex flex-col justify-center px-10'>
                    <h2
                        tw='font-staatliches tracking-wide text-white text-4xl'
                        css={css`
                            text-shadow: 0 0 4px #062821;
                        `}
                    >
                        {name}
                    </h2>
                    <p tw='h-auto text-justify font-bold text-[#062821] text-base'>{description}</p>
                </div>
            </div>
        </>
    );
};
