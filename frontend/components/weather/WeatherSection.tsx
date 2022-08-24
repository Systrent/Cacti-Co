import tw from 'twin.macro';

export const WeatherSection = ({ children }) => {
    return (
        <>
            <div tw='w-full h-screen px-10 py-24'>
                {children}
            </div>
        </>
    );
};
