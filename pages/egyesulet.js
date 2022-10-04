import { client } from "../lib/client";
import { PieChart } from "react-minimal-pie-chart";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";

export async function getStaticProps() {
  const query = `*[_type == "association"]`;
  var defaultData = await client.fetch(query);

  return {
    props: {
      defaultData,
    },
    revalidate: 1, // In seconds
  };
}

const Egyesulet = ({ defaultData }) => {
  const {
    intro,
    tagInfo,
    medalCount,
    tagCount,
    boysCount,
    girlsCount,
    tagdescription,
  } = defaultData[0];

  const dataMock = [
    { title: "Fiúk", value: boysCount, color: "#c0dfff" },
    { title: "Lányok", value: girlsCount, color: "#ffc0cb" },
  ];

  console.log(tagdescription);

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h1>Az egyesület</h1>

          <p>{intro}</p>

          <div className="button-container center">
            <div className="button btn center">Edzéstervet kérek!</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="">Az egyesület számokban</h2>

          <div className="icon-card-container association-counts">
            <div className="icon-card flex column">
              <div className="circle-count tag-count">{tagCount}</div>

              <p className="center">Tagok Száma</p>
            </div>

            <div className="icon-card flex column">
              <div className="circle-count medal-count">{medalCount}</div>

              <p className="center">Dobogós helyezések</p>
            </div>

            <div className="icon-card flex column charts">
              <PieChart
                className="boys-girls-chart"
                data={dataMock}
                label={({ dataEntry }) =>
                  Math.round(dataEntry.percentage) + "%"
                }
              />
              <p className="center">fiú:lány arány</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2 className="">Tagsági információk</h2>
          <p className="center">{tagInfo}</p>

          <div className="tag-info-details details-container">
            {tagdescription &&
              tagdescription.map((tag, i) => {
                const [summary, description] = tag.split("-");

                return (
                  <Accordion
                    key={i + summary}
                    sx={{
                      boxShadow: "none",
                      background: "transparent",
                      border: "none!important",
                      marginBottom: "10px",
                    }}
                  >
                    <AccordionSummary
                      key={i}
                      className="title"
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        marginBottom: "0px",
                        minHeight: "unset!important",
                        padding: "0px",
                        height: "auto",
                      }}
                    >
                      <Typography sx={{ textAlign: "left" }}>
                        {summary}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      className="description-container"
                      sx={{ padding: "0px" }}
                    >
                      <Typography className="description">
                        {description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Egyesulet;
