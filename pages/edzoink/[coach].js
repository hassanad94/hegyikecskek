import Image from "next/image";
import { client, urlForImage } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import ContactUs from "../../components/ContactUs";

export async function getStaticPaths() {
  const coachesQuery = `*[_type == "coaches"]{page{current}}`;
  var coaches = await client.fetch(coachesQuery);

  const paths = coaches.map((coach) => ({
    params: { coach: coach.page.current },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params: { coach } }) {
  const query = `*[_type == "coaches" && page.current == '${coach}'][0]{

    _id, name,success,proud, icon,introduction,philosophyDescription,philosophyItems[]->

  }`;

  const defaultData = await client.fetch(query);

  return {
    props: {
      defaultData,
    },
    revalidate: 1, // In seconds
  };
}

function Edzo({ defaultData }) {
  const {
    name,
    icon,
    introduction,
    philosophyDescription,
    philosophyItems,
    success,
    proud,
  } = defaultData;

  const profilImage = urlForImage(icon).url();

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <div className="profil-image">
            <Image
              width={150}
              height={150}
              src={profilImage}
              className="rounded-full"
              alt="Edző Profil Kép"
            />
          </div>

          <h2>{name}</h2>

          <div className="about-container">
            <h3 className="left-align">Rólam</h3>
            <p className="left-align">{introduction}</p>
          </div>
        </div>
      </div>

      <div className="section philosophies">
        <div className="content">
          <h2 className="left-align">Filozófiám</h2>

          <p>{philosophyDescription}</p>

          <div className="philosophies-container flex">
            {philosophyItems &&
              philosophyItems.map((item) => {
                const { name, icon: iconImage, _id } = item;

                let iconUrl = urlForImage(iconImage).url();

                return (
                  <div className="philosophy" key={_id}>
                    <div className="icon">
                      <Image
                        height={60}
                        width={60}
                        src={iconUrl}
                        alt="filozófiám ikonja"
                      />
                    </div>
                    <div className="title">{name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="section success">
        <div className="content">
          <h2 className="left-align">Eredményeim</h2>

          <PortableText className="teszt" value={success} />
        </div>
      </div>
      <div className="section proudof">
        <div className="content">
          <h2 className="left-align">Amire büszke vagyok</h2>
          <p>{proud}</p>
        </div>
      </div>
      <div className="section contactForm">
        <div className="content">
          <h2>Írj Nekünk</h2>

          <p className="center">
            Szeretnél egyéni edzéstervet és elérni a céljaidat? Írj nekünk, és
            felvesszük veled a kapcsoaltot, hogy megbeszélhessük a részelteket!
          </p>

          <ContactUs subject={true} />
        </div>
      </div>
    </>
  );
}

export default Edzo;
