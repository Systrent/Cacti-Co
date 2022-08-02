import '../styles/globals.css';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import { SWRConfig } from 'swr';
import { publicFetcher } from '../lib/publicFetcher';

const MyApp = ({ Component, pageProps }) => {
	return (
		<SWRConfig value={{ fetcher: publicFetcher }}>
			<Head>
				<link rel='shortcut icon' href='/images/cacti_co_favicon.svg' type='image/x-icon' />
				<title>Cacti-Co</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
};

export default MyApp;
