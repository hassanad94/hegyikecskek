import { client, urlForImage } from "../lib/client";
import Image from "next/image";
import Calendar from "../components/Calendar";
import { Galeria } from "../components/Galeria";
import ContactUs from "../components/ContactUs";
import OpenMessageModal from "../components/OpenMessageModal";

export async function getStaticProps() {
  const pageQuery = `*[_type == "sharedTrainings"]{
    intro, galeria, join
  }`;
  var pageInfo = await client.fetch(pageQuery);

  return {
    props: {
      defaultData: { pageInfo },
    },
    revalidate: 1, // In seconds
  };
}

const galeriaUrls = (items) => {
  let arrayOfUrls = items.map((img) => urlForImage(img).url());

  return arrayOfUrls;
};

const KozosEdzesek = ({ defaultData }) => {
  const { intro, galeria, join } = defaultData.pageInfo[0];

  const galeriaWithUrl = galeriaUrls(galeria);

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h1>Közös Edzések</h1>

          <p>{intro}</p>

          <div className="flex justify-content-center ">
            <Image
              objectFit="contain"
              width={300}
              height={163}
              src="/img/kozosedzesIntro.png"
              alt="decoration"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="left-align">Tervezett közös edzések</h2>

          <div className="flex justify-content-center kozos-edzes-calendar-container">
            <Calendar />
          </div>
        </div>
      </div>

      <div className="section page-gallery">
        <div className="content">
          <h2 className="left-align">Képek a közös edzésekről</h2>

          <div className="galeria-container">
            <Galeria galeria={galeriaWithUrl} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="left-align">Szeretnék ott lenni!</h2>

          <p>{join}</p>

          <OpenMessageModal buttonTitle="Edzéstervet kérek!" />
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

export default KozosEdzesek;
