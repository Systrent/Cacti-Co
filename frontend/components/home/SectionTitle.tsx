import tw from 'twin.macro';
import { css } from '@emotion/react';

export const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div tw='h-full w-10 flex justify-center items-center rounded-full font-staaliches bg-white/70'>
            {/* To be centered, h3 width may change depending on the font-family */}
            <div
                tw='w-3 whitespace-pre-wrap text-2xl uppercase'
                css={css`
                    word-wrap: break-word;
                `}
            >
                <h3>{title}</h3>
            </div>
        </div>
    );
};
