import tw from 'twin.macro';
import { css } from '@emotion/react';

export const OrdersSectionTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <div tw='h-full w-14 flex justify-center items-center  bg-white/75'>
                {/* To be centered, h3 width may change depending on the font-family */}
                <div
                    tw='w-4 whitespace-pre-wrap text-4xl uppercase'
                    css={css`
                        word-wrap: break-word;
                    `}
                >
                    <h3 tw='font-staatliches'>{title}</h3>
                </div>
            </div>
        </>
    );
};
