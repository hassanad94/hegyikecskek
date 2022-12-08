import { client, urlForImage } from "../lib/client";
import Image from "next/image";
import PriceCard from "../components/Packet";
import { useState, useEffect } from "react";
import ContactUs from "../components/ContactUs";
import { useStateContext } from "../context/settingContext";
import OpenMessageModal from "../components/OpenMessageModal";

export async function getStaticProps() {
  const coachesQuery = `*[_type == "coaches"]{
    _id, icon, page{current}
  }`;
  var coaches = await client.fetch(coachesQuery);

  coaches.forEach((coach) => {
    coach.icon = urlForImage(coach.icon).url();
    coach.web = coach.page.current;
  });

  const trainingPlanQuery = `*[_type == "trainingPlan"]`;
  var trainingPlan = await client.fetch(trainingPlanQuery);

  const packets = `*[_type == "traningPackets"]{
    title, name, services, price, priceEuro, trainingItems->[]
  }`;
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

const handlePacketSelectorClick = (selectedPacket) => {
  const allPacket = [
    ...document.querySelectorAll(
      ".packet-selector-container [data-packet-name]"
    ),
  ];

  allPacket.forEach((button) => button.classList.remove("active"));

  allPacket[selectedPacket].classList.add("active");
};

const Edzestervezes = ({ defaultData }) => {
  const { currentDevice } = useStateContext();

  const { trainingPackets, trainingItems, trainingPlan, coaches } = defaultData;

  const [activePacket, setActivePacket] = useState(0);

  const { desc_1, workflows } = trainingPlan[0];

  useEffect(() => {
    if (currentDevice !== "mobile") {
      return;
    }

    handlePacketSelectorClick(activePacket);
  }, [activePacket, currentDevice]);

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h1>Egyéni edzéstervezés</h1>

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

          <OpenMessageModal buttonTitle="Érdekel!" />
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
            {currentDevice === "mobile" && (
              <>
                <div className="packet-selector-container">
                  {trainingPackets &&
                    trainingPackets.map((packet, id) => {
                      return (
                        <div
                          key={packet.title.current}
                          className={
                            "button btn center" + (id === 0 ? " active" : "")
                          }
                          data-packet-name={packet.title.current}
                          onClick={() => {
                            setActivePacket(id);
                          }}
                        >
                          {packet.name}
                        </div>
                      );
                    })}
                </div>

                <PriceCard
                  trainingPacket={trainingPackets[activePacket]}
                  coaches={coaches}
                  trainingItems={trainingItems}
                />
              </>
            )}
            {(currentDevice === "tablet" || currentDevice === "desktop") &&
              trainingPackets.map((packet, id) => {
                return (
                  <PriceCard
                    key={id}
                    trainingPacket={packet}
                    coaches={coaches}
                    trainingItems={trainingItems}
                  />
                );
              })}
          </div>
          <h2>Írj Nekünk</h2>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Edzestervezes;
