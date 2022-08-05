import tw from 'twin.macro';
import Link from 'next/link';

interface HeaderButtonProps {
    title: string;
    href: string;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ title, href }) => {
    return (
        <Link href={href}>
            <a tw='bg-transparent hover:bg-white/50 hover:text-[#062821] whitespace-nowrap text-white text-sm font-semibold tracking-wide rounded-lg ease-in-out duration-200 py-1 px-6'>
                {title}
            </a>
        </Link>
    );
};
