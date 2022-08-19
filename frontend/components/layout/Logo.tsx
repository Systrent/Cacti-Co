import tw from 'twin.macro';

interface LogoProps {
    title: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => {
    return (
        <div tw='w-32 h-10 flex items-center justify-center'>
            <h1 tw="font-quicksand text-3xl font-bold text-white leading-6 whitespace-nowrap">{title}</h1>
        </div>
    );
};
