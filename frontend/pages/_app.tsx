import "../styles/globals.css";
import Head from "next/head";
import { useMemo } from "react";
import { Layout } from "../components/layout/Layout";
import { ModelsContext } from "../lib/models";
import { Auth0Provider } from "@auth0/auth0-react";



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
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Purple+Purse&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/images/cacti_co_logo2.svg" type="image/x-icon"/>
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
    </Auth0Provider>
  );
};

export default MyApp;
