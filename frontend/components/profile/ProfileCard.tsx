import useSWR from 'swr';
import { authenticatedFetcher } from '../../lib/authenticatedFetcher';
import { useToken } from '../../lib/tokenContext';
import { Spinner } from '../shared/Spinner';

export const ProfileCard = () => {
	const { auth0Token } = useToken();
	const token = auth0Token.value;

	//!ERROR
	// const { data } = useSWR('/profile/find', authenticatedFetcher, {
	// 	refreshInterval: 5000,
	// });

	const { data } = useSWR('/profile/find', {
		refreshInterval: 5000,
	});
	console.log(data);

	// const productsData = data?.data.products.edges;
	// console.log(productsData);

	return (
		<div className='flex gap-3 w-full h-28'>
			{token && <h2>{data?.firstName}</h2>}
			{!token && <Spinner />}
		</div>
	);
};
