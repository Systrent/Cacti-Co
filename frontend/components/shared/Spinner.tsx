import { css, keyframes } from "@emotion/react";

const scaleout = keyframes`
  0% {
    transform: scale(0) 
  }
  100% {
    transform: scale(1.0);
    opacity: 0;
  }
`

export const Spinner = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
    >
      <div
        className="w-16 h-16 bg-white rounded-full"
        css={css`
          animation: ${scaleout} 1.0s infinite ease-in-out;          
        `}
      />
    </div>  
  );
};