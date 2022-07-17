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
      className="bg-transparent hover:bg-black/5 whitespace-nowrap text-black/70 text-xs font-medium tracking-wide rounded-lg ease-in-out duration-300 py-1 px-4"
    >
      {title}
    </button>
  );
};