import tw from 'twin.macro';
import Link from 'next/link';
import { css } from '@emotion/react';
import { formatCurrency } from '../../lib/extra/formatCurrency';
import { useEffect, useRef } from 'react';

export const OrdersProductCard: React.FC<{ product: any }> = ({ product }) => {
    const ref = useRef(null);

    const handleMouseHover = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        const threshold = 4;
        const card = ref.current;
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (threshold / 2 - horizontal * threshold).toFixed(2);
        const rotateY = (vertical * threshold - threshold / 2).toFixed(2);
        card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    };

    const handleMouseLeave = (event) => {
        const card = ref.current;
        card.style.transform = `perspective(${event.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    };

    useEffect(() => {
        const card = ref.current;
        card.addEventListener('mousemove', handleMouseHover);
        card.addEventListener('mouseleave', handleMouseLeave);
    }, []);

    return (
        <>
            <div
                ref={ref}
                tw='h-[30%] w-[45%] lg:(h-[30%] w-[30%]) flex flex-col border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer'
            >
                <Link href={`/orders/${product.handle}`}>
                    <a tw='h-full w-full flex flex-col'>
                        <div
                            tw='h-full w-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center'
                            css={css`
                                background-image: url(${product.images.edges[0].node.transformedSrc});
                            `}
                        ></div>
                        <div tw='px-3 py-2'>
                            <h2 tw='font-bold tracking-wide text-[#062821] text-sm leading-3'>{product.title}</h2>
                        </div>
                        <div tw='px-3 py-2 bg-white/75 flex justify-center items-center'>
                            <h2 tw='font-bold tracking-wide text-[#062821] text-base leading-3'>
                                {formatCurrency(product.priceRange.minVariantPrice.amount)}
                            </h2>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
};
