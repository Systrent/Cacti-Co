import tw from 'twin.macro';
import { css } from '@emotion/react';
import { formatCurrency } from '../../lib/formatCurrency';
import Link from 'next/link';

export const ProductCard: React.FC<{ product: any }> = ({ product }) => {
    return (
        <Link href={`/orders/${product.handle}`}>
            <a tw='h-52 w-[33%] bg-no-repeat bg-cover bg-center flex flex-col border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer'>
                <div
                    tw='h-full w-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center'
                    css={css`
                        background-image: url(${product.images.edges[0].node.transformedSrc});
                    `}
                ></div>
                <div tw='px-3 py-1'>
                    <h2 tw='font-bold tracking-wide text-[#062821] text-[13px] leading-3'>{product.title}</h2>
                </div>
                <div tw='px-3 py-1 bg-white/75 flex justify-center items-center'>
                    <h2 tw='font-bold tracking-wide text-[#062821] text-[15px] leading-3'>
                        {formatCurrency(product.priceRange.minVariantPrice.amount)} 
                    </h2>
                </div>
            </a>
        </Link>
    );
};
