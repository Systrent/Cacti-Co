import tw from 'twin.macro';

import { MainMenu } from './MainMenu';

export const Header = () => {
    return (
        <div tw='flex justify-center items-center fixed top-0 z-10 w-full h-14 border-solid border-b-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm'>
            <MainMenu />
        </div>
    );
};
