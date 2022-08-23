import '../styles/globals.css';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import { SWRConfig } from 'swr';
import { publicFetcher } from '../lib/publicFetcher';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { injectGlobal } from '@emotion/css';
import { TokenApp } from '../components/shared/TokenApp';

injectGlobal`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Staatliches&display=swap');

    body{
        font-family: 'Quicksand', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <TokenApp>
                <GlobalStyles />
                <SWRConfig value={{ fetcher: publicFetcher }}>
                    <Head>
                        <title>Cacti-Co</title>
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </TokenApp>
        </div>
    );
};

export default MyApp;
