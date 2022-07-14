import { Header } from "./Header";
import { css } from "@emotion/react";
import { injectGlobal } from "@emotion/css";

injectGlobal`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap');
    body{
        font-family: 'Rubik', sans-serif;
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
