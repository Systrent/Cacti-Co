import tw from 'twin.macro';
import { useForm } from 'react-hook-form';
import { createRecommendation } from '../../lib/recommendation/createRecommendation';

export const NewRecommendation = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const title = watch('title');
    const description = watch('description');
    const submit = async () => {
        const data = { title, description };
        await createRecommendation(data);
    };

    return (
        <>
            <div tw='w-full h-full flex flex-col justify-center items-center gap-5 px-16'>
                <div tw='flex flex-col w-full h-12'>
                    <h2 tw='text-4xl text-[#062821] font-staatliches uppercase '>Create Recommendation</h2>
                </div>

                <div tw='flex flex-col w-full h-20'>
                    <label tw='text-base text-white uppercase font-bold'>Title</label>
                    <input type='text' tw='w-full p-3 border-2 rounded-lg' {...register('title')} />
                </div>
                <div tw='flex flex-col w-full h-48'>
                    <label tw='text-base text-white uppercase font-bold'>Description</label>
                    <textarea tw='w-full h-full p-3 border-2 rounded-lg' {...register('description')}></textarea>
                </div>
                <button
                    className='hover:bg-[#062821]/50 text-[#062821]/50'
                    tw='w-full h-8 flex items-center justify-center bg-white/50 hover:text-white whitespace-nowrap text-base font-bold tracking-wide rounded-lg ease-in-out duration-300 p-5'
                    onClick={submit}
                >
                    <p>Create {title?.length > 0 ? `'${title}'` : ''}</p>
                </button>
            </div>
        </>
    );
};
