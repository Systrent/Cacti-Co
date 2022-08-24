import tw from 'twin.macro';
import { FaTrashAlt } from 'react-icons/fa';

export const RecommendationCardDelete: React.FC<{ onDelete: any; item: any }> = ({ onDelete, item }) => {
    return (
        <>
            <div tw='h-auto w-full flex justify-center items-center'>
                <div tw='flex flex-col border-solid border-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm rounded-3xl overflow-hidden'>
                    <div tw=' bg-white/75 flex justify-center items-center px-3 py-3'>
                        <h2 tw='text-2xl font-staatliches tracking-wide text-[#062821] leading-3'>{item.title}</h2>
                    </div>
                    <div tw='h-full w-full flex flex-col px-3 py-2'>
                        <h2 tw='text-justify font-bold tracking-wide text-[#062821] text-base leading-6'>{item.description}</h2>
                    </div>
                    <div tw='h-9 w-full flex justify-center items-center'>
                        <button
                            className='text-[#062821]/50'
                            tw='text-2xl w-full h-full flex items-center justify-center bg-transparent hover:(bg-[#F85565] text-white) whitespace-nowrap border-white/50 border-t-2 ease-in-out duration-300 px-3'
                            onClick={() => {
                                onDelete(item._id);
                            }}
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
