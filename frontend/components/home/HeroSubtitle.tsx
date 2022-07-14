import { css } from "@emotion/react";

interface HeroSubtitleProps {
  label: string;
  a: string;
}

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ label, a }) => {
  return(
  <div 
    css={css`
      font-size: 16px;
    `}
  >
    <p>{label} <a className="underline underline-offset-2 hover:text-slate-500" href="#">{a}</a></p>
  </div>
)}

export default HeroSubtitle;