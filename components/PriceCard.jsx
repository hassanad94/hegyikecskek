import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const PriceCard = ({ trainingPacket, trainingItems, coaches }) => {
  return (
    <Card className="card" sx={{ maxWidth: 275, margin: "auto" }}>
      <Box>
        <CardContent>
          <Typography variant="h4" component="div">
            {trainingPacket.name}
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent
          sx={{ padding: "0px" }}
          className="coaches-container-wrapper"
        >
          <Box className="coaches-container">
            {coaches &&
              coaches
                .filter((coach) => coach.web !== "szabo-sandor")
                .map((coach, i) => {
                  let { icon, page, _id } = coach;
                  return (
                    <div className="coach-image rounded-full">
                      <Image
                        key={i}
                        objectFit="contain"
                        src={icon}
                        alt="Edzők"
                        layout="fill"
                      />
                    </div>
                  );
                })}
          </Box>
        </CardContent>
        <CardContent>
          <Box className="price-container">
            <span className="price">{trainingPacket.price}</span>{" "}
            <span className="upperindex">
              <span className="base-color-2">
                <b>HUF</b>
              </span>
              / hónap
            </span>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PriceCard;
