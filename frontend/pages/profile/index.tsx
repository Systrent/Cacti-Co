import { Background } from '../../components/shared/Background';
import { AuthenticatedApp } from '../../components/shared/AuthenticatedApp';
import { ProfileCard } from '../../components/profile/ProfileCard';

const Profile = () => {
	return (
		<AuthenticatedApp>
			<div className='h-screen w-full flex justify-center items-center'>
				<Background>
					<ProfileCard />
				</Background>
			</div>
		</AuthenticatedApp>
	);
};

export default Profile;