import { Background } from '../../components/shared/Background';
import { AuthenticatedApp } from '../../components/shared/AuthenticatedApp';
import { ProfileCard } from '../../components/profile/ProfileCard';

const Profile = () => {
    return (
        <div>
            <Background>
                <AuthenticatedApp>
                    <div className='h-screen w-full flex justify-center items-center'>
                        <ProfileCard />
                    </div>
                </AuthenticatedApp>
            </Background>
        </div>
    );
};

export default Profile;
