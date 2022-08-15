import { HomeSection } from '../components/home/HomeSection';
import { Background } from '../components/shared/Background';

const Page = () => {
	return (
        <div>
            <Background>
                <HomeSection imageCactus={'images/cactus_2.png'} />
            </Background>
        </div>
    );
};

export default Page;
