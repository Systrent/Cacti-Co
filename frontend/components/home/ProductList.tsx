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
        <div tw='flex gap-2'>
            {productsData?.length > 0 ? productsData.map((edge, index) => <ProductCard product={edge.node} key={index} />) : <Spinner />}
        </div>
    );
};
