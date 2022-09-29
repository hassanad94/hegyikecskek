import { client, urlForImage } from "../lib/client";
import Image from "next/image";
import { Galeria } from "../components/Galeria";
import { useState } from "react";
import ContactUs from "../components/ContactUs";

export async function getStaticProps() {
  const query = `*[_type == "camps"]`;
  var defaultData = await client.fetch(query);

  return {
    props: {
      defaultData,
    },
    revalidate: 1, // In seconds
  };
}

const galeriaUrls = (items) => {
  let arrayOfUrls = items.map((img) => urlForImage(img).url());

  return arrayOfUrls;
};

const Taborok = ({ defaultData }) => {
  const [hun] = defaultData;

  const [currentCamp, setCurrentCamp] = useState(hun);

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

          <p>{intro}</p>

          <div className="flex justify-content-center ">
            <Image
              objectFit="contain"
              width={300}
              height={163}
              src={introImageURL}
              alt="decoration"
            />
          </div>

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
          <h2 className="left-align">Képek a közös edzésekről</h2>

          <div className="galeria-container">
            <Galeria galeria={galeriaUrls(galeria)} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="left-align">Szeretnék ott lenni!</h2>

          <p>{join}</p>

          <div className="button btn center">Edzéstervet kérek!</div>
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
