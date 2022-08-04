import { NewProfileForm } from '../../components/profile/NewProfileForm';
import { Background } from '../../components/shared/Background';
import { AuthenticatedApp } from '../../components/shared/AuthenticatedApp';

const EditProfile = () => {
	return (
		<AuthenticatedApp>
			<div className='h-screen w-full flex justify-center items-center'>
				<Background>
					<NewProfileForm />
				</Background>
			</div>
		</AuthenticatedApp>
	);
};

export default EditProfile;
