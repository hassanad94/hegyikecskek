import { client, urlForImage } from "../lib/client";
import Image from "next/image";
import { Galeria } from "../components/Galeria";
import { useState } from "react";
import ContactUs from "../components/ContactUs";
import OpenMessageModal from "../components/OpenMessageModal";

export async function getStaticProps() {
  let query = `*[_type == "camps"]`;
  var defaultData = await client.fetch(query);

  query = `*[_type == "socials"]`;
  const socialData = await client.fetch(query);

  return {
    props: {
      defaultData,
      socialData,
    },
    revalidate: 1, // In seconds
  };
}

const galeriaUrls = (items) => {
  let arrayOfUrls = items.map((img) => urlForImage(img).url());

  return arrayOfUrls;
};

const Taborok = ({ defaultData, socialData }) => {
  const [hun] = defaultData;

  const [currentCamp, setCurrentCamp] = useState(hun);

  const { facebook, instagram, youtube } = socialData[0];

  const {
    intro,
    introImage,
    campName,
    campPreview,
    start,
    end,
    location,
    galeria,
    join,
    _id,
    turns,
  } = currentCamp;

  var introImageURL = urlForImage(introImage).url();
  var campPreviewImageURL = urlForImage(campPreview).url();

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h1>Táborok</h1>

          <div className="camp-selector">
            {defaultData &&
              defaultData.map((camp) => {
                const { location: campLocation, _id: campID } = camp;

                let selected = campID === _id;

                return (
                  <div
                    key={campID}
                    onClick={() => setCurrentCamp(camp)}
                    className={`button btn center ${
                      selected ? "selected" : ""
                    }`}
                  >
                    {campLocation}
                  </div>
                );
              })}
          </div>
          <h2 className="camp-name">{campName} EdzőTábor</h2>

          <div className="flex justify-content-center image ">
            <Image
              objectFit="contain"
              layout="fill"
              src={introImageURL}
              alt="decoration"
            />
          </div>

          <p>{intro}</p>

          <p className="center">{turns}</p>

          <div className="flex justify-content-center ">
            <Image
              objectFit="contain"
              width={300}
              height={163}
              src={campPreviewImageURL}
              alt="decoration"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2>Következő Táborunk</h2>
          <div className="runing-event">
            <div>
              <b>Ídőpont: </b>{" "}
              <span>
                {start} - {end}
              </span>
            </div>
            <div>
              <b>Helyszín: </b> <span>{location}</span>
            </div>
            <div>
              <b>Program: </b>{" "}
              <span>
                A táborok programja általában összesen 4 futást tartalmaz
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section page-gallery">
        <div className="content">
          <h2 className="left-align">Ízelítő a táborainkból</h2>

          <div className="galeria-container">
            <Galeria galeria={galeriaUrls(galeria)} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content apply">
          <h2 className="left-align">Szeretnél te is velünk táborozni?</h2>

          <p className="center">
            Írj nekünk, vagy vedd fel velünk a kapcsolatot a többi
            elérhetőségünkön.
          </p>

          <div className="kapcsolat-container">
            <div className="quick-contact">
              <a href="mailto:info@hegyikecskek.hu">
                &#9993; info@hegyikecskek.hu
              </a>
              <a href="tel:+36301234455">&#x1F4DE; +36 30 123 4455</a>
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

          <OpenMessageModal buttonTitle="Szeretnék Jelentkezni!" />
        </div>
      </div>

      <div className="section contactForm">
        <div className="content">
          <h2>Írj Nekünk</h2>

          <ContactUs description={true} />
        </div>
      </div>
    </>
  );
};

export default Taborok;
