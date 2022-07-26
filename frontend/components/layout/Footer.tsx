import { css } from "@emotion/react";

export const Footer = () => {
  return (
    <button
      className="fixed bottom-0 right-0 z-10 w-16 h-16 bg-white/30 shadow-sm backdrop-blur-sm"
      css={css`
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      `}
    >
        <div
          className="fixed bottom-0 right-0 gap-2 pr-3"
        >
            <img src="/images/cacti_co_pet.svg" width="23" height="23" alt="cacti_co_logo" />

        </div>
    </button>
  );
};