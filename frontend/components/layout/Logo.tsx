import tw from 'twin.macro';

interface LogoProps {
    title: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => {
    return (
        <div>
            <h2 tw="font-quicksand text-2xl font-bold text-white leading-5 whitespace-nowrap">{title}</h2>
        </div>
    );
};
