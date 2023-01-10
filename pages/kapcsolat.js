import Image from "next/image";
import ContactUs from "../components/ContactUs";
import { client } from "../lib/client";

export async function getStaticProps() {
  const query = `*[_type == "socials"]`;
  var defaultData = await client.fetch(query);

  return {
    props: {
      defaultData,
    },
    revalidate: 1,
  };
}

const Kapcsolat = ({ defaultData }) => {
  const { facebook, instagram, youtube } = defaultData;

  return (
    <div className="section">
      <div className="content">
        <h2>Írj Nekünk</h2>

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

        <ContactUs
          subject="kapcsolat felvétel"
          subjectDisabled
          description={true}
        />
      </div>
    </div>
  );
};

export default Kapcsolat;
