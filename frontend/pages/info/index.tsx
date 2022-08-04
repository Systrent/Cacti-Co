import { NewCactusForm } from '../../components/info/NewCactusForm';
import { useModels } from '../../lib/models';

const Info = () => {
	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<NewCactusForm />
		</div>
	);
};

export default Info;
