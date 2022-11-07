import Layout from "../components/Layout";
import "../styles/globals.css";
import { StateContext } from "../context/settingContext";
import { useEffect, useState } from "react";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [desktopRequest, setDesktopRequest] = useState(false);

  useEffect(() => {
    const currentWindowSize = window.innerWidth;
    setDesktopRequest(currentWindowSize > 1024);
  }, []);

  if (desktopRequest) {
    return (
      <div className="loader">
        <div>
          <Image src="/in-build.svg" width={200} height={200} />
          <h1>Az oldal épp készítjük. Mobilodon megtekinheted.</h1>
        </div>
      </div>
    );
  }

  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
