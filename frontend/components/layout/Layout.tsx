import { Header } from "./Header";
import { injectGlobal } from "@emotion/css";
import { Footer } from "./Footer";

injectGlobal`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Secular+One&display=swap');

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
