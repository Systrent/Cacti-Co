import tw from 'twin.macro';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

export const LoginButton: React.FC = () => {
    const { loginWithRedirect, user, logout } = useAuth0();
    // console.log(user);
    return (
        <div tw='flex'>
            {!user && (
                <button
                    tw='h-10 bg-transparent flex justify-center items-center gap-3 hover:bg-[#4BC190] hover:text-white whitespace-nowrap text-white text-base font-medium tracking-wide rounded-lg ease-in-out duration-200 px-4'
                    onClick={() => loginWithRedirect()}
                >
                    <FaUser tw='text-lg' />
                    <span>Login</span>
                </button>
            )}
            {user && (
                <div tw='inline-flex flex-row gap-1 items-center'>
                    <div tw='flex items-center bg-[#4BC190] whitespace-nowrap text-white text-base font-semibold tracking-wide rounded-lg ease-in-out duration-300 py-1 px-6'>
                        {user.nickname}
                    </div>
                    <button
                        className='outline outline-offset-[-2px] outline-2 outline-[#062821]/50 hover:outline-none text-[#062821]/50'
                        tw='h-8 bg-transparent hover:bg-[#F85565] whitespace-nowrap text-base hover:text-white font-medium tracking-wide rounded-lg ease-in-out duration-300 px-3'
                        onClick={() => logout({ returnTo: window.location.origin })}
                    >
                        <FaSignOutAlt />
                    </button>
                </div>
            )}
        </div>
    );
};
