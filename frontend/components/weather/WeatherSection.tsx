import tw from 'twin.macro';
import { NewRecommendationForm } from './NewRecommendation';

export const WeatherSection = () => {
    return (
        <section>
            <div tw='w-full h-screen px-10 py-24'>
                <NewRecommendationForm />
            </div>
        </section>
    );
};
