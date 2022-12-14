import Image from "next/image";
import Link from "next/link";
import { client, urlForImage } from "../lib/client";
import { PortableText } from "@portabletext/react";
import { CoachesPreview } from "../components/Coaches";
import { Galeria } from "../components/Galeria";
import { ReviewCard } from "../components/Packet";
import ContactUs from "../components/ContactUs";
import { useStateContext } from "../context/settingContext";
import OpenMessageModal from "../components/OpenMessageModal";

import { useState } from "react";

export async function getStaticProps() {
  const query = `*[_type == "home"] {
    _id, hero,title_1,galeriavideos,galeriaimages
  }`;
  var defaultData = await client.fetch(query);

  const coaches = `*[_type == "coaches"] {
    _id, hero, name, icon
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

  const { currentDevice, getYoutubeEmbemedId } = useStateContext();

  const [cardExtrainfo, setCardExtrainfo] = useState([
    false,
    false,
    false,
    false,
  ]);

  const heroImage = urlForImage(hero).url();

  const galeriaImagesUrls = galeriaimages.map((img) =>
    urlForImage(img).width(1000).url()
  );

  const youtubeIds = galeriavideos.map((link) => {
    return getYoutubeEmbemedId(link);
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
          src={heroImage}
          priority={true}
          alt="hero"
          title="F?? k??p"
          layout="fill"
        />
      </div>

      <div className="section title-desc intro ">
        <div className="content">
          <PortableText value={title_1} />

          <Link href="/rolunk">
            <div className="buttonWithArrow button">B??vebben</div>
          </Link>
        </div>
      </div>

      <div className="section interested">
        <div className="content">
          <h2>Ha szeretn??l</h2>

          <div className="image-card-container">
            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-1.png"
                alt="Indok mi??rt csatlakozz"
              />

              {cardExtrainfo[0] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretn??l gyorsabb lenni, vagy hosszabb t??vokat futni.
                  </p>{" "}
                </div>
              ) : (
                <div className="description">
                  <div className="rotateIcon">
                    <Image
                      width={23}
                      height={23}
                      src="/icons/rotate-left.svg"
                      alt="Information"
                    />{" "}
                  </div>
                  <p>Fejl??dni aszfalton</p>
                </div>
              )}
            </div>

            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-2.png"
                alt="Indok mi??rt csatlakozz"
              />

              {cardExtrainfo[1] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretn??l gyorsabb lenni, vagy hosszabb t??vokat futni.
                  </p>{" "}
                </div>
              ) : (
                <div className="description">
                  <div className="rotateIcon">
                    <Image
                      width={23}
                      height={23}
                      src="/icons/rotate-left.svg"
                      alt="Information"
                    />{" "}
                  </div>
                  <p>Fejl??dni terepen</p>
                </div>
              )}
            </div>

            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-3.png"
                alt="Indok mi??rt csatlakozz"
              />

              {cardExtrainfo[2] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretn??l gyorsabb lenni, vagy hosszabb t??vokat futni.
                  </p>{" "}
                </div>
              ) : (
                <div className="description">
                  <div className="rotateIcon">
                    <Image
                      width={23}
                      height={23}
                      src="/icons/rotate-left.svg"
                      alt="Information"
                    />{" "}
                  </div>
                  <p>Elkezdeni futni</p>
                </div>
              )}
            </div>

            <div className="image-card" onClick={handleReasonCardClick}>
              <Image
                layout="fill"
                src="/img/reason-4.png"
                alt="Indok mi??rt csatlakozz"
              />

              {cardExtrainfo[3] ? (
                <div className="extraInfo">
                  {" "}
                  <p>
                    Ha szeretn??l gyorsabb lenni, vagy hosszabb t??vokat futni.
                  </p>{" "}
                </div>
              ) : (
                <div className="description">
                  <div className="rotateIcon">
                    <Image
                      width={23}
                      height={23}
                      src="/icons/rotate-left.svg"
                      alt="Information"
                    />{" "}
                  </div>
                  <p>Csapathoz tartozni</p>
                </div>
              )}
            </div>
          </div>

          <div className="button-container center">
            <OpenMessageModal buttonTitle="??rdekel" />
          </div>
        </div>
      </div>

      <div className="section mountain-dec expect">
        <div className="content">
          <h2 className="center">Mire sz??m??thatsz n??lunk</h2>
        </div>
        {currentDevice === "mobile" ? (
          <div className="mountain-dec-container">
            <Image
              width={400}
              height={427}
              src={`/mountain-dec-m.png`}
              alt="hegy dekor??ci??"
              className="mountain-dec"
              objectFit="container"
            />
          </div>
        ) : (
          <div className="mountain-dec-container">
            <Image
              layout="fill"
              src={`/mountain-dec.png`}
              alt="hegy dekor??ci??"
              className="mountain-dec"
              objectFit="contain"
            />
          </div>
        )}
      </div>

      <div className="section coaches">
        <div className="content">
          <h2 className="center">Edz??ink</h2>

          <CoachesPreview coaches={coachesData} />
        </div>
      </div>

      <div className="section page-gallery">
        <div className="content">
          <h2 className="center">Gal??ria</h2>

          <div className="galeria-container">
            <Galeria galeria={galeria} />
          </div>

          <Link href="/galeria">
            <div className="buttonWithArrow right button">
              Gal??ria megnyit??sa
            </div>
          </Link>
        </div>
      </div>

      <div className="section reviews">
        <div className="content">
          <h2 className="center">R??lunk mondt??k</h2>

          <div className="reviews-container">
            <ReviewCard reviews={reviewsData} />
          </div>
        </div>
      </div>

      <div className="section supporters">
        <div className="content">
          <h2>T??mogat??ink</h2>

          <div className="supporter-container flex">
            <Link href="/kedvezmenyek/#hegyfutas">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-1.png"
                  alt="T??mogatoink Log??ja"
                />
              </div>
            </Link>

            <Link href="/kedvezmenyek/#runnerslab">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-2.png"
                  alt="T??mogatoink Log??ja"
                />
              </div>
            </Link>

            <Link href="/kedvezmenyek/#pinter">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-3.png"
                  alt="T??mogatoink Log??ja"
                />
              </div>
            </Link>

            <Link href="/kedvezmenyek/#proactivelab">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-4.png"
                  alt="T??mogatoink Log??ja"
                />
              </div>
            </Link>

            <Link href="/kedvezmenyek/#allrys">
              <div className="supporter">
                <Image
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                  height="100"
                  src="/img/supporter-5.png"
                  alt="T??mogatoink Log??ja"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="section contactForm">
        <div className="content">
          <h2>??rj Nek??nk</h2>

          <ContactUs />
        </div>
      </div>
    </>
  );
}
