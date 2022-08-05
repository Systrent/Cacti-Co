import { NewCactusForm } from '../../components/info/NewCactusForm';
import { Background } from '../../components/shared/Background';

const Info = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <Background>
                <NewCactusForm />
            </Background>
        </div>
    );
};

export default Info;
