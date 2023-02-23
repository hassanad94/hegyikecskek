import { client, urlForImage } from "../lib/client";
import Image from "next/image";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { Galeria } from "../components/Galeria";
import { useStateContext } from "../context/settingContext";

export async function getStaticProps() {
  const query = `*[_type == "aboutUs"]`;
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

const Rolunk = ({ defaultData }) => {
  const { desc_1, img_1, teamdescription, trailer, galeria } = defaultData[0];

  const { getYoutubeEmbemedId } = useStateContext();

  var youtubeEmbemedId = getYoutubeEmbemedId(trailer);

  var heroImage = urlForImage(img_1).url();

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h1>Rólunk</h1>
        </div>

        <div className="decoration fill-img center">
          <Image
            layout="fill"
            priority
            src={heroImage}
            alt="hero"
            title="Fő kép"
          />
        </div>

        <div className="content">
          <p className="center">
            <i>{desc_1}</i>
          </p>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="miben">Miben hiszünk</h2>

          <div className="icon-card-container">
            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-1.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Egy csapat vagyunk</p>
            </div>

            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-2.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Segítünk egymásnak</p>
            </div>

            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-3.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Sportszerűek vagyunk</p>
            </div>

            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-4.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Keményen dolgozunk</p>
            </div>

            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-5.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Jól érezzük magunkat</p>
            </div>

            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-6.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Szeretjük a kihívásokat</p>
            </div>

            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-7.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Örülünk egymásnak</p>
            </div>

            <div className="icon-card flex column">
              <Image
                width="50"
                objectFit="contain"
                height="50"
                src="/img/belife-8.png"
                alt="Miben Hiszünk"
              />

              <p className="center">Tiszteljük a másikat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section page-gallery">
        <div className="content">
          <h2>A csapat</h2>

          <p>{teamdescription}</p>

          <YoutubeEmbed
            maxWidth="100%"
            maxHeight="490px"
            embedId={youtubeEmbemedId}
          />

          <div className="galeria-container">
            <Galeria galeria={galeriaUrls(galeria)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rolunk;
