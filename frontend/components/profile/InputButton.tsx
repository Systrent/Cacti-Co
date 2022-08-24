import tw from "twin.macro";

export const InputButton: React.FC<{children: any, onClick: any}> = ({ children, onClick }) => {
  return (
      <>
          <button
              tw='bg-transparent hover:bg-white/50 hover:text-[#062821] whitespace-nowrap text-white text-sm font-semibold tracking-wide rounded-lg ease-in-out duration-200 py-1 px-6'
              onClick={onClick}
          >
              {children}
          </button>
      </>
  );
};