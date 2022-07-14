import { css } from "@emotion/react";
import { MainMenu } from "./MainMenu";
import ImageLayout from "../shared/ImageLayout";
import { LateralMenu } from "./LateralMenu";

export const Header = () => {
  return (
    <div
      css={css`
        background: transparent;
        position: fixed;
        top: 0;
        z-index: 2;
      `}
    >
      <div
        css={css`
          max-width: 100%;
          padding: 10px 15px 10px 50px;
          display: grid;
          grid-template-columns: 1fr 4fr 1fr;
        `}
      >
        <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
        `}
        >
          <ImageLayout src="/images/tesla_logo.png" width="110" height="14" alt="logo_tesla"/>
        </div>
        <MainMenu />
        <LateralMenu />
      </div>
    </div>
  );
};
