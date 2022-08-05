import tw from 'twin.macro';
import { HeaderButton } from './HeaderButton';
import { LoginButton } from './LoginButton';
import { Logo } from './Logo';

export const MainMenu = () => {
    return (
        <div tw='w-3/4 flex justify-center items-center justify-between gap-8'>
            <div>
                <button tw='flex justify-center items-center gap-2'>
                    <img src='/images/cacti_co_logo.svg' width='18' height='36' alt='cacti_co_logo' />
                    <Logo title='cacti-co' />
                </button>
            </div>
            <div>
                <HeaderButton title='Home' href='/' />
                <HeaderButton title='Orders' href='/orders' />
                <HeaderButton title='Info' href='/info' />
                <HeaderButton title='Contact' href='/contact' />
            </div>
            <div>
                <LoginButton />
            </div>
        </div>
    );
};
