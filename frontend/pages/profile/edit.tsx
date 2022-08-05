import { NewProfileForm } from '../../components/profile/NewProfileForm';
import { Background } from '../../components/shared/Background';
import { AuthenticatedApp } from '../../components/shared/AuthenticatedApp';

const EditProfile = () => {
    return (
        <div>
            <Background>
                <AuthenticatedApp>
                    <div className='h-screen w-full flex justify-center items-center'>
                        <NewProfileForm />
                    </div>
                </AuthenticatedApp>
            </Background>
        </div>
    );
};

export default EditProfile;
