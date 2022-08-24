import { Background } from '../../components/shared/Background';
import { AuthenticatedApp } from '../../components/shared/AuthenticatedApp';
import { WorkInProgress } from '../../components/maintenance/WorkInProgress';

const Profile = () => {
    return (
        <>
            <Background>
                <AuthenticatedApp>
                    <div className='h-screen w-full flex justify-center items-center'>
                        <WorkInProgress />
                    </div>
                </AuthenticatedApp>
            </Background>
        </>
    );
};

export default Profile;
