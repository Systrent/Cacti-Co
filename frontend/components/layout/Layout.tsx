import { Header } from "./Header";
import { injectGlobal } from "@emotion/css";

injectGlobal`
    body{
        font-family: 'Rubik', 'Quicksand', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const Layout = ({ children }) => (
  <div
    className="min-h-screen"
  >
    <Header />
    {children}
  </div>
);
