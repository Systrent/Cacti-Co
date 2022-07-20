interface HeaderButtonProps {
  title?: string;
  onClick?: any;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  onClick,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-[#062821]/5 hover:outline outline-offset-[-2px] outline-solid outline-2 outline-white whitespace-nowrap text-[#062821] text-sm font-bold tracking-wide rounded-lg ease-in-out duration-200 py-1 px-6"
    >
      {title}
    </button>
  );
};