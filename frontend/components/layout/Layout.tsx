import tw from 'twin.macro';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => (
    <div tw='min-h-screen'>
        <Header />
        {children}
        <Footer />
    </div>
);
