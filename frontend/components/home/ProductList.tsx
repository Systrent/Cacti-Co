import useSWR from 'swr';
import { publicFetcher } from '../../lib/publicFetcher';
import { Spinner } from '../shared/Spinner';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
	const { data } = useSWR('/products', publicFetcher, {
		refreshInterval: 4000,
	});

	const productsData = data?.data.products.edges;
	console.log(productsData);

	return (
		<div className='flex gap-3 w-full h-28'>
			{productsData?.length > 0 ? productsData.map((edge, index) => <ProductCard product={edge.node} key={index} />) : <Spinner />}
		</div>
	);
};
