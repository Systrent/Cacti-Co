import { css } from "@emotion/react";

interface ActionButtonProps {
  label: string;
  isDark?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, isDark}) => {
  let backgroundColor = "rgba(0, 0, 0, 0.7)";
  let textColor = "rgba(255, 255, 255, 0.85)";

  if(!isDark){
    backgroundColor = "rgba(255, 255, 255, 0.7)";
    textColor = "rgba(0, 0, 0, 0.85)";
  }
  
  return(
  <div 
    css={css`
      font-size: 14px;
      font-weight: 400;
    `}
  >
    <button
    css={css`
        background-color: ${backgroundColor};
        color: ${textColor};
        width: 250px;
        border-radius: 20px;
        padding: 8px 20px;
        text-transform: uppercase;
        white-space: nowrap;
    `}
    >
      <p>{label}</p>
    </button>
  </div>
)}

export default ActionButton;