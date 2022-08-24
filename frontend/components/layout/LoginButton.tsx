import tw from 'twin.macro';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUser, FaSignOutAlt, FaEdit } from 'react-icons/fa';

export const LoginButton: React.FC = () => {
    const { loginWithRedirect, user, logout } = useAuth0();

    return (
        <>
            <div tw='flex'>
                {!user && (
                    <button
                        tw='h-10 bg-transparent flex justify-center items-center gap-3 hover:(bg-white/50 text-[#062821]) whitespace-nowrap text-white text-base font-medium tracking-wide rounded-lg ease-in-out duration-200 px-4'
                        onClick={() => loginWithRedirect()}
                    >
                        <FaUser tw='text-lg' />
                        <span>Login</span>
                    </button>
                )}
                {user && (
                    <div tw='inline-flex flex-row gap-1 items-center'>
                        <Link href='/weather/admin/create'>
                            <a
                                className='hover:bg-[#062821]/50 text-[#062821]/50'
                                tw='h-8 flex items-center justify-center bg-white/50 hover:text-white whitespace-nowrap text-base font-medium tracking-wide rounded-lg ease-in-out duration-300 px-3'
                            >
                                <FaEdit />
                            </a>
                        </Link>
                        <Link href='/profile'>
                            <a
                                className='bg-[#062821]/50'
                                tw='flex items-center  whitespace-nowrap text-white text-base font-semibold tracking-wide rounded-lg ease-in-out duration-300 py-1 px-4 cursor-pointer'
                            >
                                {user.nickname}
                            </a>
                        </Link>
                        <button
                            className='outline outline-offset-[-2px] outline-2 outline-[#062821]/50 hover:outline-none text-[#062821]/50'
                            tw='h-8 flex items-center justify-center bg-transparent hover:(bg-[#F85565] text-white) whitespace-nowrap text-base font-medium tracking-wide rounded-lg ease-in-out duration-300 px-3'
                            onClick={() => logout({ returnTo: window.location.origin })}
                        >
                            <FaSignOutAlt />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
