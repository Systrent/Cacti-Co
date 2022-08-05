import tw from 'twin.macro';
import { css } from '@emotion/react';

export const ProductCard: React.FC<{ product: any }> = ({ product }) => {
    return (
        <div tw='h-32 max-w-[20%] bg-no-repeat bg-cover bg-center flex flex-col border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden'>
            <div
                tw='h-full w-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center'
                css={css`
                    background-image: url(${product.images.edges[0].node.transformedSrc});
                `}
            ></div>
            <div tw='px-3 py-1'>
                <h2 tw='font-bold tracking-wide text-[#062821] text-[13px] leading-3'>{product.title}</h2>
            </div>
        </div>
    );
};
