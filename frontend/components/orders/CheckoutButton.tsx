import tw from 'twin.macro';
import useSWR from 'swr';
import { formatCurrency } from '../../lib/extra/formatCurrency';

export const CheckoutButton: React.FC<{ productVariantId: string; productName: string; productPrice: number }> = ({
    productVariantId,
    productName,
    productPrice,
}) => {
    const { data } = useSWR(`/products/checkout?variantId=${productVariantId}`);
    const url = data?.data.checkoutCreate.checkout.webUrl;
    const formatPrice = formatCurrency(productPrice);

    return (
        <>
            <a
                className='hover:bg-[#062821]/50 text-[#062821]/75'
                tw='h-20 lg:(h-12) flex items-center justify-center bg-white/50 hover:text-white text-base font-bold tracking-wide rounded-lg ease-in-out duration-300 p-4'
                type='button'
                href={url}
                target='_blank'
            >
                {`Buy ${productName} - ${formatPrice}`}
            </a>
        </>
    );
};
