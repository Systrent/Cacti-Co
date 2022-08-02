import { NewProfileForm } from '../../components/profile/NewProfileForm';
import { AuthenticatedApp } from '../../components/shared/AuthenticatedApp';

const Profile = () => {
	return (
		<AuthenticatedApp>
			<div className='h-screen w-full flex justify-center items-center'>
				<NewProfileForm />
			</div>
		</AuthenticatedApp>
	);
};

export default Profile;
