import { client, urlForImage } from "../../lib/client";
import { CoachSelectorButton } from "../../components/Coaches";
import CoachPreviewCard from "../../components/CoachPreviewCard";
import OpenMessageModal from "../../components/OpenMessageModal";

export async function getStaticProps() {
  const query = `*[_type == "coachesSite"]`;
  var siteData = await client.fetch(query);

  const coachesQuery = `*[_type == "coaches"]{
    _id, icon, page{current}, name, introduction, price, isEuro,titles,hero
  }`;
  var coaches = await client.fetch(coachesQuery);

  return {
    props: {
      defaultData: { siteData, coaches },
    },
    revalidate: 1, // In seconds
  };
}

const Edzoink = ({ defaultData }) => {
  const { siteData, coaches } = defaultData;

  const { intro } = siteData[0];

  var coachesDataNormalized = coaches;

  coachesDataNormalized.forEach((coach) => {
    coach.icon = urlForImage(coach.icon).url();
    coach.hero = urlForImage(coach.hero).url();
    coach.web = coach.page.current;
  });

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h2>Edzőink</h2>

          <p>{intro}</p>

          <div className="coach-select-container flex">
            {coachesDataNormalized?.map((coach) => {
              const { _id } = coach;

              return <CoachSelectorButton key={_id} coach={coach} />; //SCROLL TO ELEMENT FEJLESZTÉSRE VÁR
            })}
          </div>

          <div className="coach-preview-card-container">
            {coachesDataNormalized?.map((coach) => {
              const { _id } = coach;

              return <CoachPreviewCard key={_id} coach={coach} />;
            })}
          </div>

          <OpenMessageModal buttonTitle="Edzéstervet Kérek" />
        </div>
      </div>
    </>
  );
};

export default Edzoink;
