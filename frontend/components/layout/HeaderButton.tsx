import tw from 'twin.macro';
import Link from 'next/link';

interface HeaderButtonProps {
    children: any;
    href: string;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ children, href }) => {
    return (
        <Link href={href}>
            <a tw='flex h-8 items-center bg-transparent hover:bg-white/50 hover:text-[#062821] whitespace-nowrap text-white text-sm font-semibold tracking-wide rounded-lg ease-in-out duration-200 px-12'>
                {children}
            </a>
        </Link>
    );
};
