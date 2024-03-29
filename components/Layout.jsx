import Head from "next/head";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import BackButton from "./BackButton";
import { useStateContext } from "../context/settingContext";
const Layout = ({ children }) => {
  const router = useRouter();

  const { currentDevice } = useStateContext();

  return (
    <div
      className={`layout ${
        router.asPath === "/" ? "home" : router.asPath.replace("/", "")
      }`}
    >
      <Head>
        <title>Hegyi Kecskék</title>
        <meta name="description" content="Hegyi kecskék hivatalos oldala" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons//apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons//favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons//favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons//site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons//safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header>
        <NavBar />
      </header>

      {currentDevice !== "desktop" && <BackButton router={router} />}

      <main className="main-container">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
