import tw from 'twin.macro';
import { FaTools } from 'react-icons/fa';

export const WorkInProgress = () => {
    return (
        <>
            <div tw='w-full h-screen px-10 py-24'>
                <div tw='w-full h-full flex flex-col justify-center items-center gap-6'>
                    <p tw='uppercase tracking-wider text-base'>Sorry for the inconvinience</p>
                    <p tw='uppercase font-staatliches text-6xl'>Work In Progress</p>
                    <p tw='uppercase font-staatliches text-4xl'>
                        <FaTools />
                    </p>
                </div>
            </div>
        </>
    );
};
