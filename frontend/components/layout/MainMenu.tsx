import tw from 'twin.macro';
import { HeaderButton } from './HeaderButton';
import { LoginButton } from './LoginButton';
import { Logo } from './Logo';
import { FaInfoCircle, FaShopify, FaHome, FaCloudSun } from 'react-icons/fa';
import Link from 'next/link';

export const MainMenu = () => {
    return (
        <div tw='w-3/4 flex justify-between items-center'>
            <Link href='/'>
                <a tw='flex justify-center items-center gap-2 cursor-pointer'>
                    <img src='/images/cacti_co_logo.svg' width='18' height='36' alt='cacti_co_logo' />
                    <Logo title='cacti-co' />
                </a>
            </Link>
            <div tw='w-4/6 flex justify-center items-center'>
                <HeaderButton href='/' title='Home'>
                    <FaHome tw='text-2xl' />
                </HeaderButton>
                <HeaderButton href='/info' title='Plants Info'>
                    <FaInfoCircle tw='text-xl' />
                </HeaderButton>
                <HeaderButton href='/weather' title='Weather Info'>
                    <FaCloudSun tw='text-2xl' />
                </HeaderButton>
                <HeaderButton href='/orders' title='Products'>
                    <FaShopify tw='text-2xl' />
                </HeaderButton>
            </div>
            <div>
                <LoginButton />
            </div>
        </div>
    );
};
