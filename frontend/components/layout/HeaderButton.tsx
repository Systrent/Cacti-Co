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
                tw='h-8 px-8 gap-2 flex justify-center items-center bg-transparent hover:(bg-white/50 text-[#062821]) whitespace-nowrap text-white text-base font-semibold tracking-wide rounded-lg cursor-pointer relative ease-in-out duration-300'
            >
                {children}
                <span
                    tw='opacity-0 absolute group-hover:(opacity-100 static)'
                    css={css`
                        :after {
                            content: '${title}';
                        }
                    `}
                ></span>
            </a>
        </Link>
    );
};
