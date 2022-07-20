import cx from "classnames";

interface ActionButtonProps {
  label: string;
  isDark?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ label, isDark}) => {
  return(
  <div 
    className="font-normal text-xs"
  >
    <button
      className={cx("w-60 rounded-full py-2 px-5 uppercase whitespace-nowrap", {
        "bg-black/70 text-white": isDark == true,
        "bg-white/70 text-black": !isDark,
      })}
    >
      <p>{label}</p>
    </button>
  </div>
)}