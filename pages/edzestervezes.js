import { client, urlForImage } from "../lib/client";
import Image from "next/image";

export async function getStaticProps() {
  const query = `*[_type == "trainingPlan"]`;
  var defaultData = await client.fetch(query);

  return {
    props: {
      defaultData,
    },
    revalidate: 1, // In seconds
  };
}

const edzestervezes = ({ defaultData }) => {
  const { desc_1, workflows } = defaultData[0];

  const [selectedPlan, setSelectedPlan] = useState("basic");

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
                workflows.map((work) => {
                  let [title, desc] = work.split("|");

                  return (
                    <li>
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
              <div class="card-image">
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
              <div class="card-image">
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
              <div class="card-image">
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
              <div class="card-image">
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
              <div class="card-image">
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

          <div className="pricing-container"></div>
        </div>
      </div>
    </>
  );
};

export default edzestervezes;
