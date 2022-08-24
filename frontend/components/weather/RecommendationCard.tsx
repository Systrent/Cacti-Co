import tw from 'twin.macro';

export const RecommendationCard: React.FC<{ item: any }> = ({ item }) => {
    return (
        <>
            <div tw='h-auto w-[75%] flex flex-col border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden'>
                <div tw=' bg-white/75 flex justify-center items-center p-4'>
                    <h2 tw='text-3xl font-staatliches tracking-wide text-[#062821] leading-3'>{item.title}</h2>
                </div>
                <div tw='h-full w-full flex flex-col px-3 py-2'>
                    <h2 tw='text-justify font-bold tracking-wide text-[#062821] text-lg leading-6'>{item.description}</h2>
                </div>
            </div>
        </>
    );
};
