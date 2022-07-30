import "../styles/globals.css";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { ModelsContext } from "../lib/models";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { SWRConfig } from "swr";
import { backend_fetcher } from "../lib/fetcher";
import { TokenContext } from "../lib/tokenContext";

const MyApp = ({ Component, pageProps }) => {
  const origin = useMemo(() => {
    if (typeof window != "undefined") {
      return window.location.origin;
    }
  }, []);

  const AuthenticatedApp = ({children}) => {
    //Fetch accessToken from API audience
    const { getAccessTokenSilently } = useAuth0();
    const [ token, setToken ] = useState('');
    
    useEffect(() => {
      getAccessTokenSilently().then(myToken => {
        console.log("----TOKEN----", myToken);
        setToken(myToken);
      })
    }, []);

    return (
      <SWRConfig value={{ fetcher: backend_fetcher(token) }}>
        <TokenContext.Provider
          value={{
            auth0Token: { value: token }
          }}
        >
          {children}
        </TokenContext.Provider>
      </SWRConfig>
    )
  }

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={origin}
      audience="cacti-co"
      scope="openid profile email"
    >
      <AuthenticatedApp>
        <Head>
          <link rel="shortcut icon" href="/images/cacti_co_favicon.svg" type="image/x-icon"/>
          <title>Cacti-Co</title>
        </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </AuthenticatedApp>
    </Auth0Provider>
  );
};

export default MyApp;
