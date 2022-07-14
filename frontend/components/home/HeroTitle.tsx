import { css } from "@emotion/react";

interface HeroTitleProps {
  label: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ label }) => {
  return(
  <div 
    css={css`
      font-size: 45px;
      font-weight: 500;
    `}
  >
    <h2>{label}</h2>
  </div>
)}

export default HeroTitle;