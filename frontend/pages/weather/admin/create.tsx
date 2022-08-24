import tw from 'twin.macro';
import { Background } from '../../../components/shared/Background';
import { DeleteRecommendation } from '../../../components/weather/DeleteRecommendation';
import { NewRecommendation } from '../../../components/weather/NewRecommendation';
import { WeatherSection } from '../../../components/weather/WeatherSection';

const WeatherRecommendationCreate = () => {
    return (
        <>
            <Background>
                <WeatherSection>
                    <div tw='flex w-full h-full gap-10'>
                        <NewRecommendation />
                        <DeleteRecommendation />
                    </div>
                </WeatherSection>
            </Background>
        </>
    );
};

export default WeatherRecommendationCreate;
