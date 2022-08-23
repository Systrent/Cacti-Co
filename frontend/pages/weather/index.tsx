import { Background } from '../../components/shared/Background';
import { WeatherSection } from '../../components/weather/WeatherSection';

const Weather = () => {
    return (
        <div>
            <Background>
                <WeatherSection />
            </Background>
        </div>
    );
};

export default Weather;
