import tw from 'twin.macro';
import { HeaderButton } from './HeaderButton';
import { LoginButton } from './LoginButton';
import { Logo } from './Logo';
import { FaStore, FaInfo, FaInfoCircle, FaShopify, FaHome, FaCloudSun } from 'react-icons/fa';

export const MainMenu = () => {
    return (
        <div tw='w-3/4 flex justify-center items-center justify-between gap-8'>
            <div>
                <button tw='flex justify-center items-center gap-2'>
                    <img src='/images/cacti_co_logo.svg' width='18' height='36' alt='cacti_co_logo' />
                    <Logo title='cacti-co' />
                </button>
            </div>
            <div tw='flex'>
                <HeaderButton href='/'>
                    <FaHome tw='text-xl' />
                </HeaderButton>
                <HeaderButton href='/info'>
                    <FaInfoCircle tw='text-lg' />
                </HeaderButton>
                <HeaderButton href='/weather'>
                    <FaCloudSun tw='text-xl' />
                </HeaderButton>
                <HeaderButton href='/orders'>
                    <FaShopify tw='text-xl' />
                </HeaderButton>
            </div>
            <div>
                <LoginButton />
            </div>
        </div>
    );
};
