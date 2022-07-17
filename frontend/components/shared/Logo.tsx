import { css } from "@emotion/react";

interface LogoProps {
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => {
  return(
  <div>
    <h2
      css={css`
        font-family: 'Quicksand';
        font-size: 40px;
        font-weight: 700;
        color: #393C54;
      `}
    >{title}</h2>
  </div>
)}