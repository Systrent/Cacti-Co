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
      className="bg-transparent hover:bg-white/50 hover:text-[#062821] whitespace-nowrap text-white text-sm font-semibold tracking-wide rounded-lg ease-in-out duration-200 py-1 px-6"
    >
      {title}
    </button>
  );
};