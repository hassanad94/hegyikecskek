import Image from "next/image";
import Link from "next/link";
import { client, urlForImage } from "../lib/client";
import { PortableText } from "@portabletext/react";
import { CoachesPreview } from "../components/Coaches";
import { Galeria } from "../components/Galeria";
import { ReviewCard } from "../components/Card";
import ContactUs from "../components/ContactUs";

import { useState } from "react";

export async function getStaticProps() {
  const query = `*[_type == "home"] {
    _id, hero,title_1,galeriavideos,galeriaimages
  }`;
  var defaultData = await client.fetch(query);

  const coaches = `*[_type == "coaches"] {
    _id, hero, name
  }`;

  const coachesData = await client.fetch(coaches);

  const reviews = `*[_type == "reviews"]`;

  const reviewsData = await client.fetch(reviews);

  return {
    props: {
      defaultData,
      coachesData,
      reviewsData,
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  };
}

export default function Home({ defaultData, coachesData, reviewsData }) {
  const { hero, title_1, galeriaimages, galeriavideos } = defaultData[0];

  const [cardExtrainfo, setCardExtrainfo] = useState([
    false,
    false,
    false,
    false,
  ]);

  const heroImage = urlForImage(hero).url();

  const galeriaImagesUrls = galeriaimages.map((img) => urlForImage(img).url());

  const youtubeIds = galeriavideos.map((link) => {
    return link.split("v=")[1];
  });

  const galeria = [...galeriaImagesUrls, ...youtubeIds];

  const handleReasonCardClick = (element) => {
    const target = element.target.closest(".image-card");

    let getcurrentChildIndex = Array.from(target.parentNode.children).indexOf(
      target
    );

    let cardElements = [...cardExtrainfo];

    cardElements[getcurrentChildIndex] = !cardElements[getcurrentChildIndex];

    setCardExtrainfo(cardElements);
  };

  return (
    <>
      <div className="hero-container fw">
        <Image
          loader={() => heroImage}
          unoptimized={true}
          src={heroImage}
          alt="hero"
          title="Fő kép"
          layout="fill"
        />
        {/* <Image layout='fill' src={heroImage.url()} decoding="sync" alt="Hero" className='hero' /> */}
      </div>

      <div className="section title-desc intro ">
        <div className="content">
          <PortableText className="teszt" value={title_1} />

          <Link href="/rolunk">
            <div className="buttonWithArrow button">Bővebben</div>
          </Link>
        </div>
      </div>

      <div className="section interested">
        <div className="content">
          <h2>Ha szeretnél</h2>

          <div className="image-card-container">
            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-1.png"
                alt="Indok miért csatlakozz"
              />

              {cardExtrainfo[0] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretnél gyorsabb lenni, vagy hosszabb távokat futni.
                  </p>{" "}
                </div>
              ) : (
                <p>
                  Fejlődni aszfalton
                  <br />
                  <Image
                    width="15"
                    height="15"
                    src="/i.png"
                    alt="Information"
                  />
                </p>
              )}
            </div>

            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-2.png"
                alt="Indok miért csatlakozz"
              />

              {cardExtrainfo[1] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretnél gyorsabb lenni, vagy hosszabb távokat futni.
                  </p>{" "}
                </div>
              ) : (
                <p>
                  Fejlődni terepen
                  <br />
                  <Image
                    width="15"
                    height="15"
                    src="/i.png"
                    alt="Information"
                  />
                </p>
              )}
            </div>

            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-3.png"
                alt="Indok miért csatlakozz"
              />

              {cardExtrainfo[2] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretnél gyorsabb lenni, vagy hosszabb távokat futni.
                  </p>{" "}
                </div>
              ) : (
                <p>
                  Elkezdeni futni
                  <br />
                  <Image
                    width="15"
                    height="15"
                    src="/i.png"
                    alt="Information"
                  />
                </p>
              )}
            </div>

            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-4.png"
                alt="Indok miért csatlakozz"
              />

              {cardExtrainfo[3] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretnél gyorsabb lenni, vagy hosszabb távokat futni.
                  </p>{" "}
                </div>
              ) : (
                <p>
                  Csapathoz tartozni
                  <br />
                  <Image
                    width="15"
                    height="15"
                    src="/i.png"
                    alt="Information"
                  />
                </p>
              )}
            </div>
          </div>

          <div className="button-container center">
            <div className="button btn center center-grid">Érdekel!</div>
          </div>
        </div>
      </div>

      <div className="section grid-center expect">
        <div className="content">
          <h2 className="center">Mire számíthatsz nálunk</h2>

          <div className="mountain-items flex column">
            <p className="item">egy szuper csapat </p>
            <p className="item">egyéni edzésterv </p>
            <p className="item">egyesületi tagság </p>
            <p className="item">közös futások </p>
            <p className="item">konzultációk </p>
            <p className="item">táborok </p>
          </div>
        </div>

        <div className="mountain-dec-container">
          <Image
            layout="fill"
            src="/img/mountain-dec.png"
            alt="hegy dekoráció"
            className="mountain-dec"
          />
        </div>
      </div>

      <div className="section coaches">
        <div className="content">
          <h2 className="center">Edzőink</h2>

          <CoachesPreview coaches={coachesData} />
        </div>
      </div>

      <div className="section page-gallery">
        <div className="content">
          <h2 className="center">Galéria</h2>

          <div className="galeria-container">
            <Galeria galeria={galeria} />
          </div>

          <div className="buttonWithArrow left button">Galéria megnyitása</div>
        </div>
      </div>

      <div className="section reviews">
        <div className="content">
          <h2 className="center">Rólunk mondták</h2>

          <div className="galeria-container">
            <ReviewCard reviews={reviewsData} />
          </div>
        </div>
      </div>

      <div className="section supporters">
        <div className="content">
          <h2>Támogatoink</h2>

          <div className="supporter-container flex">
            <Link href="/tamogatoink">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-1.png"
                  alt="Támogatoink Logója"
                />
              </div>
            </Link>

            <Link href="/tamogatoink">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-2.png"
                  alt="Támogatoink Logója"
                />
              </div>
            </Link>

            <Link href="/tamogatoink">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-3.png"
                  alt="Támogatoink Logója"
                />
              </div>
            </Link>

            <Link href="/tamogatoink">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-4.png"
                  alt="Támogatoink Logója"
                />
              </div>
            </Link>

            <Link href="/tamogatoink">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-5.png"
                  alt="Támogatoink Logója"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="section contactForm">
        <div className="content">
          <h2>Írj Nekünk</h2>

          <ContactUs />
        </div>
      </div>
    </>
  );
}
