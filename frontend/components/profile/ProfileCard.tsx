import useSWR from 'swr';
import tw from 'twin.macro';
import { authenticatedFetcher } from '../../lib/fetching/authenticatedFetcher';
import { useToken } from '../../lib/context/tokenContext';
import { Spinner } from '../shared/Spinner';

export const ProfileCard = () => {
    const { auth0Token } = useToken();
    const token = auth0Token.value;

    const { data } = useSWR('/profile/find', authenticatedFetcher(token), {
    	refreshInterval: 5000,
    });

    return (
        <>
            <div tw='flex gap-3 w-full h-28'>
                {token && <h2>{data?.firstName}</h2>}
                {!token && <Spinner />}
            </div>
        </>
    );
};
