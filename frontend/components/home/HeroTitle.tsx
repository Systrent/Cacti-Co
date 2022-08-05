import tw from 'twin.macro';

interface HeroTitleProps {
    label: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ label }) => {
    return (
        <div tw='text-center text-4xl font-medium'>
            <h2>{label}</h2>
        </div>
    );
};
