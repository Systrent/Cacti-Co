import '../styles/globals.css';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import { SWRConfig } from 'swr';
import { publicFetcher } from '../lib/publicFetcher';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <GlobalStyles />
            <SWRConfig value={{ fetcher: publicFetcher }}>
                <Head>
                    <title>Cacti-Co</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SWRConfig>
        </div>
    );
};

export default MyApp;
