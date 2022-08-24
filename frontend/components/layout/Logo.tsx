import tw from 'twin.macro';

interface LogoProps {
    title: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => {
    return (
        <>
            <div tw='lg:(w-32 h-10 flex items-center justify-center) w-0 hidden'>
                <h1 tw='lg:(font-quicksand text-3xl font-bold text-white leading-6 whitespace-nowrap)'>{title}</h1>
            </div>
        </>
    );
};
