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
		<div>
			<div className='flex flex-col'>
				<label className='text-base'>Name</label>
				<input
					type='text'
					className='w-96 h-8 p-3 border-2 rounded-lg'
					placeholder='Astrophytum Asterias V Type, etc.'
					{...register('name')}
				/>
			</div>
			<div className='flex flex-col'>
				<label className='text-base'>Description</label>
				<input type='text' className='w-96 h-8 p-3 border-2 rounded-lg' placeholder='Spiny, Fast growth, etc.' {...register('description')} />
			</div>
			<InputButton onClick={submit}>Create product</InputButton>
		</div>
	);
};
