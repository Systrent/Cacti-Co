import { css } from "@emotion/react";
import { MainMenu } from "./MainMenu";
import { ImageLayout } from "../shared/ImageLayout";
import { LateralMenu } from "./LateralMenu"

export const Header = () => {
  return (
    <div
      css={css`
        background: transparent;
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
      `}
    >
      <div
        css={css`
          padding: 15px 15px 25px;
          display: flex;
          justify-content: center;
        `}
      >
        <MainMenu />
      </div>
    </div>
  );
};
