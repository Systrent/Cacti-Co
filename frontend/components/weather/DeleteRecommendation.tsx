import useSWR from 'swr';
import tw from 'twin.macro';
import { deleteRecommendation } from '../../lib/recommendation/deleteRecommendation';
import { Spinner } from '../shared/Spinner';
import { RecommendationCardDelete } from './RecommendationCardDelete';

export const DeleteRecommendation = () => {
    const { data, mutate } = useSWR('/recommendations/find', {
        refreshInterval: 500,
    });
    
    return (
        <>
            <div tw='w-full h-full flex flex-wrap gap-2 justify-center items-center overflow-auto px-36'>
                {data?.length > 0 ? (
                    data.map((item, index) => (
                        <RecommendationCardDelete
                            onDelete={async () => {
                                await deleteRecommendation(item._id);
                                mutate();
                            }}
                            item={item}
                            key={index}
                        />
                    ))
                ) : (
                    <div tw='w-full h-full flex justify-center items-center'>
                        <Spinner />
                    </div>
                )}
            </div>
        </>
    );
};
