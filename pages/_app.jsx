import "../styles/globals.css";
import { useState, useEffect } from "react";
import { LiffMockPlugin } from "@line/liff-mock";
import Layout from "../components/layout";
// import { LiffMockPlugin } from "@line/liff-mock";

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff").then((liff) => {
      // liff.use(new LiffMockPlugin());
      console.log("LIFF init...");
      liff
        .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID, mock: false })
        .then(() => {
          console.log("LIFF init succeeded.");
          // { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }
          setLiffObject(liff);
        })
        .catch((error) => {
          console.log("LIFF init failed.");
          setLiffError(error.toString());
        });
    });
  }, []);

  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  // pageProps.profile = profile;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
