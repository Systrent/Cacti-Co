import { useAuth0 } from "@auth0/auth0-react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect, user, logout } = useAuth0();
  return (
    <div
      className="flex">
      {!user && (
        <button 
        className="bg-transparent hover:bg-[#4BC190] hover:text-white whitespace-nowrap text-black/70 text-sm font-bold tracking-wide rounded-lg ease-in-out duration-200 py-1 px-6"
        onClick={() => loginWithRedirect()}
        >
        Login
        </button>
      )}
      {user && (
        <div 
          className="inline-flex flex-row gap-1 items-center">
            <div
              className="flex items-center bg-[#4BC190] whitespace-nowrap text-white text-sm font-bold tracking-wide rounded-lg ease-in-out duration-300 py-1 px-6"
            >
              {user.nickname}
            </div>
            <button
              className="bg-[#8F5653]/10 outline outline-offset-[-2px] outline-solid outline-2 outline-[#8F5653]/20 whitespace-nowrap text-sm font-medium tracking-wide rounded-lg ease-in-out duration-300 py-1 px-2"
              onClick={() => logout({ returnTo: window.location.origin})}
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="text-[#8F5653]/50"/>
            </button>
        </div>
        
      )}
    </div>
  );
};