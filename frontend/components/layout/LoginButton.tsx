import tw from 'twin.macro';
import { useAuth0 } from '@auth0/auth0-react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser } from 'react-icons/fa';

export const LoginButton: React.FC = () => {
    const { loginWithRedirect, user, logout } = useAuth0();
    // console.log(user);
    return (
        <div tw='flex'>
            {!user && (
                <button
                    tw='flex h-8 bg-transparent items-center hover:bg-[#4BC190] hover:text-white whitespace-nowrap text-white text-sm font-medium tracking-wide rounded-lg ease-in-out duration-200 px-12'
                    onClick={() => loginWithRedirect()}
                >
                    <FaUser tw='text-lg' />
                </button>
            )}
            {user && (
                <div tw='inline-flex flex-row gap-1 items-center'>
                    <div tw='flex items-center bg-[#4BC190] whitespace-nowrap text-white text-sm font-semibold tracking-wide rounded-lg ease-in-out duration-300 py-1 px-6'>
                        {user.nickname}
                    </div>
                    <button
                        className='outline outline-offset-[-2px] outline-2 outline-[#062821]/50 hover:outline-none text-[#062821]/50'
                        tw='bg-transparent hover:bg-[#F85565] whitespace-nowrap text-sm hover:text-white font-medium tracking-wide rounded-lg ease-in-out duration-300 py-1 px-2'
                        onClick={() => logout({ returnTo: window.location.origin })}
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                </div>
            )}
        </div>
    );
};
