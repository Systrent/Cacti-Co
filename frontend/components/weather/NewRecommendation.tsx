import tw from 'twin.macro';
import { useForm } from 'react-hook-form';
import { InputButton } from '../profile/InputButton';
import { createRecommendation } from '../../lib/recommendation/createRecommendation';

export const NewRecommendationForm = () => {
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
        console.log('HANDLE SUBMIT RECOMENDATION');
        console.log(data);
        
        await createRecommendation(data);
    };

    return (
        <div tw='flex flex-col justify-center items-center w-full h-screen'>
            <div tw='flex flex-col'>
                <label tw='text-base'>Title</label>
                <input type='text' tw='w-96 h-8 p-3 border-2 rounded-lg' {...register('title')} />
            </div>
            <div tw='flex flex-col'>
                <label tw='text-base'>Description</label>
                <input type='text' tw='w-96 h-8 p-3 border-2 rounded-lg' {...register('description')} />
            </div>
            <InputButton onClick={submit}>
                <p>
                    Create recomendation { title?.length > 0 ? `[${title}]` : '' }
                </p>
            </InputButton>
        </div>
    );
};
