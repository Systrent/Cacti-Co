import useSWR from 'swr';
import tw from 'twin.macro';
import { authenticatedFetcher } from '../../lib/authenticatedFetcher';
import { useToken } from '../../lib/tokenContext';
import { ProductCard } from '../home/ProductCard';
import { Spinner } from '../shared/Spinner';

export const FavoriteProducts = () => {
    const { auth0Token } = useToken();
    const token = auth0Token.value;

    // const { data } = useSWR('/list/find', authenticatedFetcher(token), {
    //     refreshInterval: 5000,
    // });
    // console.log(data);

    const { data } = useSWR('/products', {
        refreshInterval: 4000,
    });

    const productsData = data?.data.products.edges;
    console.log(productsData);

    return (
        <div tw='h-full w-full flex flex-wrap gap-2'>
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
