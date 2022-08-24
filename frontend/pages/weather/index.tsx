import { Background } from '../../components/shared/Background';
import { RecommendationList } from '../../components/weather/RecommendationList';
import { WeatherSection } from '../../components/weather/WeatherSection';

const Weather = () => {
    return (
        <>
            <Background>
                <WeatherSection>
                    <RecommendationList />
                </WeatherSection>
            </Background>
        </>
    );
};

export default Weather;
