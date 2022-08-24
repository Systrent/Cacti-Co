import { WorkInProgress } from '../../components/maintenance/WorkInProgress';
import { Background } from '../../components/shared/Background';

const Info = () => {
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center'>
                <Background>
                    <WorkInProgress />
                </Background>
            </div>
        </>
    );
};

export default Info;
