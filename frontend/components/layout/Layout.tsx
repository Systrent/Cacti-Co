import { Header } from "./Header";
import { injectGlobal } from "@emotion/css";
import { Footer } from "./Footer";
injectGlobal`
    body{
        font-family: 'Quicksand', sans-serif;
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
    <Footer />
  </div>
);
