import tw from 'twin.macro';
import Link from 'next/link';
import { css } from '@emotion/react';

interface HeaderButtonProps {
    children: any;
    href: string;
    title: string;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ children, href, title }) => {
    return (
        <Link href={href}>
            <a
                className='group'
                tw='h-8 px-8 gap-2 flex justify-center items-center bg-transparent hover:(bg-white/50 text-[#062821] pr-20) whitespace-nowrap text-white text-base font-semibold tracking-wide rounded-lg ease-in-out duration-300 relative'
            >
                {children}
                <span
                    tw='inline-block ease-in-out duration-300 absolute top-1 right-4 opacity-0 group-hover:opacity-100'
                    css={css`
                        :after {
                            content: '${title}';
                        }
                    `}
                ></span>
                {/* <a
                    type='button'
                    tw='w-1/5 h-10 px-4 gap-2 flex justify-center items-center bg-transparent hover:(bg-white/50 text-[#062821]) whitespace-nowrap text-white text-base font-semibold tracking-wide rounded-lg ease-in-out duration-300 cursor-pointer'
                >
                    {children}
                    <span>{title}</span>
                </a> */}
            </a>
        </Link>
    );
};
