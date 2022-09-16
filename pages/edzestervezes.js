import { client, urlForImage } from "../lib/client";
import Image from "next/image";
import PriceCard from "../components/PriceCard";

export async function getStaticProps() {
  const coachesQuery = `*[_type == "coaches"]{
    _id, icon, page{current}
  }`;
  var coaches = await client.fetch(coachesQuery);

  const trainingPlanQuery = `*[_type == "trainingPlan"]`;
  var trainingPlan = await client.fetch(trainingPlanQuery);

  const packets = `*[_type == "traningPackets"]`;
  var trainingPackets = await client.fetch(packets);

  const items = `*[_type == "trainingItems"]`;
  var trainingItems = await client.fetch(items);

  return {
    props: {
      defaultData: { trainingPackets, trainingItems, trainingPlan, coaches },
    },
    revalidate: 1, // In seconds
  };
}

const edzestervezes = ({ defaultData }) => {
  const { trainingPackets, trainingItems, trainingPlan, coaches } = defaultData;

  var coachesWithLogoURL = coaches;

  coachesWithLogoURL.forEach((coach) => {
    coach.icon = urlForImage(coach.icon).url();
    coach.web = coach.page.current;
    //console.log(coach);
  });

  const { desc_1, workflows } = trainingPlan[0];

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h2>Egyéni edzéstervezés</h2>

          <p>{desc_1}</p>

          <div className="flex justify-content-center ">
            <Image
              objectFit="contain"
              width={300}
              height={163}
              src="/img/step.png"
              alt="decoration"
            />
          </div>

          <br />

          <div className="button btn center">Érdekel!</div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="left-align">Hogyan dolgozunk?</h2>

          <div className="flex justify-content-center">
            <ul className="details-container">
              {workflows &&
                workflows.map((work, key) => {
                  let [title, desc] = work.split("|");

                  return (
                    <li key={key}>
                      <details>
                        <summary>{title}</summary>
                        <p>{desc}</p>
                      </details>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="left-align">Értékeink</h2>

          <div className="icon-card-container rounded-card-image">
            <div className="icon-card flex column">
              <div className="card-image">
                <Image
                  width="50"
                  objectFit="contain"
                  height="50"
                  src="/img/belife-1.png"
                  alt="Miben Hiszünk"
                />
              </div>

              <p className="center">Minőség</p>
            </div>

            <div className="icon-card flex column">
              <div className="card-image">
                <Image
                  width="50"
                  objectFit="contain"
                  height="50"
                  src="/img/belife-2.png"
                  alt="Miben Hiszünk"
                />
              </div>

              <p className="center">Csapatszellem</p>
            </div>

            <div className="icon-card flex column">
              <div className="card-image">
                <Image
                  width="50"
                  objectFit="contain"
                  height="50"
                  src="/img/belife-3.png"
                  alt="Miben Hiszünk"
                />
              </div>

              <p className="center">Folyamatos fejlődés</p>
            </div>

            <div className="icon-card flex column">
              <div className="card-image">
                <Image
                  width="50"
                  objectFit="contain"
                  height="50"
                  src="/img/belife-4.png"
                  alt="Miben Hiszünk"
                />
              </div>

              <p className="center">Sportszerűség</p>
            </div>

            <div className="icon-card flex column">
              <div className="card-image">
                <Image
                  width="50"
                  objectFit="contain"
                  height="50"
                  src="/img/belife-5.png"
                  alt="Miben Hiszünk"
                />
              </div>

              <p className="center">kommunikáció</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="left-align">Hogyan működik?</h2>

          <div className="count-task-container">
            <div className="task flex flex-center">
              <div className="count">1</div>

              <p>
                <b>Felvesszük a kapcsolatot!</b>
                <br />
                Akár írásban, akár telefonon megbeszéljük a részleteket, és
                válaszolunk a kérdéseidre
              </p>
            </div>

            <div className="task flex flex-center">
              <div className="count">2</div>

              <p>
                <b>Teljesítménydiagnosztika</b>
                <br />
                Akár írásban, akár telefonon megbeszéljük a részleteket, és
                válaszolunk a kérdéseidre
              </p>
            </div>

            <div className="task flex flex-center">
              <div className="count">3</div>

              <p>
                <b>Kiértékelés, megbeszélés</b>
                <br />
                Akár írásban, akár telefonon megbeszéljük a részleteket, és
                válaszolunk a kérdéseidre
              </p>
            </div>

            <div className="task flex flex-center">
              <div className="count">4</div>

              <p>
                <b>Elkezdjük a munkát!</b>
                <br />
                Akár írásban, akár telefonon megbeszéljük a részleteket, és
                válaszolunk a kérdéseidre
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2>Csomagjaink és Áraink</h2>

          <div className="pricing-container">
            <PriceCard
              trainingPacket={trainingPackets[0]}
              coaches={coachesWithLogoURL}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default edzestervezes;
