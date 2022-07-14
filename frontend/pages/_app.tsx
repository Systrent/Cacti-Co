import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import { ModelsContext } from "../lib/models";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon">
        </link>
        <title>Tesla React Clone</title>
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
    </div>
  );
};

export default MyApp;
