import "../styles/globals.css";
import Head from "next/head";
import { useMemo } from "react";
import { Layout } from "../components/layout/Layout";
import { ModelsContext } from "../lib/models";
import { Auth0Provider } from "@auth0/auth0-react";
import { SWRConfig } from "swr";
import { backend_fetcher } from "../lib/fetcher";

const MyApp = ({ Component, pageProps }) => {
  const origin = useMemo(() => {
    if (typeof window != "undefined") {
      return window.location.origin;
    }
  }, []);

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={origin}
      audience="cacti-co"
      scope="openid profile email"
    >
      <SWRConfig value={{ fetcher: backend_fetcher }}>
        <Head>
          <link rel="shortcut icon" href="/images/cacti_co_favicon.svg" type="image/x-icon"/>
          <title>Cacti-Co</title>
        </Head>
        <ModelsContext.Provider
          value={{
            modelS: { name: "Model S", img: "images/model_S.jpg" },
            model3: { name: "Model 3", img: "images/model_3.jpg" },
            modelX: { name: "Model X", img: "images/model_X.jpg" },
            modelY: { name: "Model Y", img: "images/model_Y.jpg" } 
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModelsContext.Provider>
      </SWRConfig>
    </Auth0Provider>
  );
};

export default MyApp;
