import { client } from "../lib/client";
import Supporter from "../components/Supporter";

export async function getStaticProps() {
  const query = `*[_type == "supportersSite"]`;
  var siteData = await client.fetch(query);

  const supportersQuery = `*[_type == "supporters"]`;

  var supporters = await client.fetch(supportersQuery);

  return {
    props: {
      siteData,
      supporters,
    },
    revalidate: 1, // In seconds
  };
}

const galeriaUrls = (items) => {
  let arrayOfUrls = items.map((img) => urlForImage(img).url());

  return arrayOfUrls;
};

const Kedvezmenyek = (...prop) => {
  const { siteData, supporters } = prop[0];

  const { intro, howTo } = siteData[0];
  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h1>Kedvezmények</h1>

          <p>{intro}</p>

          <h2>Partnereink & kedvezmények</h2>
        </div>
      </div>

      {supporters &&
        supporters.map((supporter) => {
          return (
            <div className="section supporter intro no-hero">
              <div className="content">
                <Supporter supporter={supporter} />
              </div>
            </div>
          );
        })}

      <div className="section">
        <div className="content">
          <h2>Hogyan vehetem igénybe a kedvezményeket?</h2>

          <p>{howTo}</p>
        </div>
      </div>
    </>
  );
};

export default Kedvezmenyek;
