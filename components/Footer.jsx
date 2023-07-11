import Image from "next/image";
import Link from "next/link";
import { client } from "/lib/client";
import { useEffect, useState } from "react";
import OpenMessageModal from "./OpenMessageModal";

const Footer = () => {
  const [socials, setSocials] = useState({});

  useEffect(() => {
    client
      .fetch(`*[_type == "socials"]`)
      .then((data) => setSocials(data[0]))
      .catch(console.error);
  }, []);

  const { facebook, instagram, youtube } = socials;

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

      <div className="services-container">
        <h3> Szolgáltatások</h3>

        <div className="footer-menu flex column">
          <Link href="/edzestervezes">edzéstervezés</Link>
          <Link href="/konzultacio">konzultáció</Link>
          <Link href="/esemenyek">események</Link>
        </div>
      </div>

      <div className="egyesulet">
        <h3> Egyesület</h3>

        <div className="footer-menu flex column">
          <Link href="/informacio">információ</Link>
          <Link href="/tagsag">tagság</Link>
          <Link href="/elonyok">előnyök</Link>
        </div>
      </div>

      <div className="kapcsolat">
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
              width="22px"
              height="22px"
              src="/facebook.png"
              alt="Logo"
              className="logo"
            />
          </a>

          <a href={instagram}>
            <Image
              objectFit="contain"
              width="22px"
              height="22px"
              src="/instagram.png"
              alt="Logo"
              className="logo"
            />
          </a>

          <a href={youtube}>
            <Image
              objectFit="contain"
              width="22px"
              height="22px"
              src="/youtube.png"
              alt="Logo"
              className="logo"
            />
          </a>
        </div>
      </div>

      <div className="controls">
        <OpenMessageModal
          subject="edzésterv"
          buttonTitle="Edzéstervet szeretnék!"
        />
        <br />
        <OpenMessageModal
          subject="egyesületi tagság"
          buttonTitle="Tag szeretnék lenni!"
        />
      </div>
    </div>
  );
};

export default Footer;
