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

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h2>Egyéni edzéstervezés</h2>

          <p>{desc_1}</p>

          <Image
            objectFit="contain"
            width={300}
            height={163}
            src="/img/step.png"
            alt="decoration"
          />

          <div className="button btn center center-grid">Érdekel!</div>
        </div>
      </div>

      <div className="section intro no-hero">
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
    </>
  );
};

export default edzestervezes;
