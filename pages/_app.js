import Layout from "../components/Layout";
import "../styles/globals.css";
import { StateContext } from "../context/settingContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
