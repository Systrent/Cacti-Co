import tw from 'twin.macro';

interface HeroSubtitleProps {
    label: string;
    a: string;
}

export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ label, a }) => {
    return (
        <div tw='text-sm'>
            <p>
                {label}{' '}
                <a tw='underline underline-offset-2 hover:text-slate-500' href='#'>
                    {a}
                </a>
            </p>
        </div>
    );
};
