import tw from 'twin.macro';
import { css } from '@emotion/react';
import { CheckoutButton } from './CheckoutButton';
import { Spinner } from '../shared/Spinner';

export const SingleOrderSection: React.FC<{ product: any }> = ({ product }) => {
    const productVariantId = product.productByHandle.variants.edges[0].node.id;
    const productName = product.productByHandle.title;
    const productDescription = product.productByHandle.description;
    const productPrice = product.productByHandle.priceRange.minVariantPrice.amount;
    const productImage = product.productByHandle.images.edges[0].node.transformedSrc;

    return (
        <>
            <div tw='w-full h-screen px-10 py-24'>
                <div tw='w-full h-full flex justify-center items-center'>
                    <div
                        className='bg-[#062821]/75 border-[#062821]/30 '
                        tw='h-full w-full lg:(w-[75%]) flex justify-between items-center border-solid border-2 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden'
                    >
                        <div tw='w-1/2 h-full '>
                            <img src={productImage} tw='h-full w-full object-cover items-center' />
                        </div>
                        <div tw='w-1/2 h-full flex flex-col justify-center px-10 gap-12'>
                            <div tw='flex flex-col gap-2'>
                                <label tw='text-base text-white uppercase '>Name</label>
                                <h2
                                    tw='font-staatliches tracking-wide text-white text-4xl'
                                    css={css`
                                        text-shadow: 0 0 4px #062821;
                                    `}
                                >
                                    {productName}
                                </h2>
                            </div>
                            <div tw='flex flex-col gap-2'>
                                <label tw='text-base text-white uppercase '>Description</label>
                                <p tw='h-auto text-justify font-bold text-white text-base'>{productDescription}</p>
                            </div>
                            {productVariantId ? (
                                <CheckoutButton productVariantId={productVariantId} productName={productName} productPrice={productPrice} />
                            ) : (
                                <Spinner />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
