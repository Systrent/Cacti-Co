import { Header } from "./Header";
import { css } from "@emotion/react";
import { injectGlobal } from "@emotion/css";

injectGlobal`
    body{
        font-family: 'Rubik', 'Quicksand', sans-serif;
        margin:0;
        padding:0;
    }
    a{
      text-decoration: none;
    }
`;

export const Layout = ({ children }) => (
  <div
    css={css`
      min-height: 100vh;
    `}
  >
    <Header />
    <div
      css={css`
        text-align: center;
      `}
    >
      {children}
    </div>
  </div>
);
