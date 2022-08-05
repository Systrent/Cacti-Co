import tw from 'twin.macro';
import { useForm } from 'react-hook-form';
import { InputButton } from '../profile/InputButton';

// TODO: Continue class video w15d1 (2h 26min)

export const NewCactusForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const submit = handleSubmit((data) => {
        console.log('HANDLE SUBMIT');
        console.log(data);
    });
    return (
        <div tw='flex flex-col justify-center items-center w-full h-screen'>
            <div tw='flex flex-col'>
                <label tw='text-base'>Name</label>
                <input type='text' tw='w-96 h-8 p-3 border-2 rounded-lg' placeholder='Astrophytum Asterias V Type, etc.' {...register('name')} />
            </div>
            <div tw='flex flex-col'>
                <label tw='text-base'>Description</label>
                <input type='text' tw='w-96 h-8 p-3 border-2 rounded-lg' placeholder='Spiny, Fast growth, etc.' {...register('description')} />
            </div>
            <InputButton onClick={submit}>Create product</InputButton>
        </div>
    );
};
