import Image from "next/image";
import Link from "next/link";
import { client } from "/lib/client";
import { useEffect, useState } from "react";
import OpenMessageModal from "./OpenMessageModal";
import { useStateContext } from "../context/settingContext";

const Footer = () => {
  const [socials, setSocials] = useState({});
  const { currentDevice } = useStateContext();

  useEffect(() => {
    client
      .fetch(`*[_type == "socials"]`)
      .then((data) => setSocials(data[0]))
      .catch(console.error);
  }, []);

  const { facebook, instagram, youtube } = socials;

  if (currentDevice === "desktop") {
    return (
      <>
        <div className="section footer-desktop footer flex">
          <div className="flex general">
            <div className="logo-container flex">
              <Image
                width="100"
                height="100"
                src="/logo-dark.png"
                alt="Logo"
                className="logo"
              />
            </div>

            <div className="footer-menu flex column">
              <h3> Hegyikecskék</h3>
              <Link href="/rolunk">Rólunk</Link>
              <Link href="/velemenyek">Vélemények</Link>
              <Link href="/galeria">Galéria</Link>
            </div>

            <div className="footer-menu flex column">
              <h3> Szolgáltatások</h3>
              <Link href="/edzestervezes">edzéstervezés</Link>
              <Link href="/konzultacio">konzultáció</Link>
              <Link href="/esemenyek">események</Link>
            </div>

            <div className="footer-menu flex column">
              <h3> Egyesület</h3>
              <Link href="/informacio">információ</Link>
              <Link href="/tagsag">tagság</Link>
              <Link href="/elonyok">előnyök</Link>
            </div>
          </div>

          <div className="flex contacts">
            <h3> Kapcsolat</h3>

            <div className="quick-contact">
              <a href="mailto:info@hegyikecskek.hu">
                &#9993; info@hegyikecskek.hu
              </a>{" "}
              <br />
              &#x1F4DE; <a href="tel:+36301234455">+36 30 123 4455</a>
            </div>

            <div className="social-media-ref">
              <a href={facebook}>
                <Image
                  objectFit="contain"
                  width="32px"
                  height="32px"
                  src="/facebook.png"
                  alt="Logo"
                  className="logo"
                />
              </a>

              <a href={instagram}>
                <Image
                  objectFit="contain"
                  width="32px"
                  height="32px"
                  src="/instagram.png"
                  alt="Logo"
                  className="logo"
                />
              </a>

              <a href={youtube}>
                <Image
                  objectFit="contain"
                  width="32px"
                  height="32px"
                  src="/youtube.png"
                  alt="Logo"
                  className="logo"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="section footer">
      <div className="logo-container">
        <Image
          width="84px"
          height="77px"
          src="/logo-dark.png"
          alt="Logo"
          className="logo"
        />
      </div>

      <h3> Szolgáltatások</h3>

      <div className="footer-menu flex column">
        <Link href="/edzestervezes">edzéstervezés</Link>
        <Link href="/konzultacio">konzultáció</Link>
        <Link href="/esemenyek">események</Link>
      </div>

      <h3> Egyesület</h3>

      <div className="footer-menu flex column">
        <Link href="/informacio">információ</Link>
        <Link href="/tagsag">tagság</Link>
        <Link href="/elonyok">előnyök</Link>
      </div>

      <h3> Kapcsolat</h3>

      <div className="quick-contact">
        <a href="mailto:info@hegyikecskek.hu">&#9993; info@hegyikecskek.hu</a>{" "}
        <br />
        &#x1F4DE; <a href="tel:+36301234455">+36 30 123 4455</a>
      </div>

      <div className="social-media-ref">
        <a href={facebook}>
          <Image
            objectFit="contain"
            width="32px"
            height="32px"
            src="/facebook.png"
            alt="Logo"
            className="logo"
          />
        </a>

        <a href={instagram}>
          <Image
            objectFit="contain"
            width="32px"
            height="32px"
            src="/instagram.png"
            alt="Logo"
            className="logo"
          />
        </a>

        <a href={youtube}>
          <Image
            objectFit="contain"
            width="32px"
            height="32px"
            src="/youtube.png"
            alt="Logo"
            className="logo"
          />
        </a>
      </div>

      <OpenMessageModal buttonTitle="Edzéstervet szeretnék!" />
      <br />
      <OpenMessageModal buttonTitle="Tag szeretnék lenni!" />
    </div>
  );
};

export default Footer;
