import useSWR from 'swr';
import tw from 'twin.macro';
import { Spinner } from '../shared/Spinner';
import { RecommendationCard } from './RecommendationCard';


export const RecommendationList = () => {
    const { data } = useSWR('/recommendations/find', {
        refreshInterval: 4000,
    });

    return (
        <>
            <div tw='h-full w-full flex flex-wrap gap-2 justify-center items-center overflow-auto pr-2'>
                {data?.length > 0 ? (
                    data.map((item, index) => <RecommendationCard item={item} key={index} />)
                ) : (
                    <div tw='w-full h-full flex justify-center items-center'>
                        <Spinner />
                    </div>
                )}
            </div>
        </>
    );
};
