import useSWR from 'swr';
import tw from 'twin.macro';
import { Spinner } from '../shared/Spinner';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
    const { data } = useSWR('/products', {
        refreshInterval: 4000,
    });

    const productsData = data?.data.products.edges;
    console.log(productsData);

    return (
        <div tw='flex flex-wrap gap-2'>
            {productsData?.length > 0 ? (
                productsData.map((item, index) => <ProductCard product={item.node} key={index} />)
            ) : (
                <div tw='w-full h-full flex justify-center items-center'>
                    <Spinner />
                </div>
            )}
        </div>
    );
};
