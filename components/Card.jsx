import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, FreeMode } from "swiper";
import Image from "next/image";
import { urlForImage } from "../lib/client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ReviewCard = ({ reviews }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[FreeMode, Navigation, Scrollbar, A11y]}
      navigation
      freeMode={true}
      className="review-cards"
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={(swiper) => console.log('slide change',swiper)}
    >
      {reviews &&
        reviews.map((review, i) => {
          let profilSrc = urlForImage(review.hero).url();

          return (
            <SwiperSlide key={i}>
              <div className="card">
                <div className="qvot">
                  <Image
                    alt="Idéző jél"
                    title={"ídézőjel"}
                    layout="fill"
                    src="/img/qvot.png"
                  />
                </div>

                <div className="card-content flex center">
                  <p className="center">{review.review}</p>

                  <div className="profile-pic">
                    <Image
                      alt="Profil kép"
                      title={review.name}
                      layout="fill"
                      src={profilSrc}
                    />
                  </div>
                </div>

                <div className="name">
                  ━ <span>{review.name}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PriceCard = ({ trainingPacket, trainingItems, coaches }) => {
  var regularCoaches = coaches.filter((coach) => coach.web !== "szabo-sandor");

  var coachSanyi = coaches.filter((coach) => coach.web === "szabo-sandor")[0];

  return (
    <Card
      className="card"
      data-packet-name={trainingPacket.title.current}
      sx={{ maxWidth: 275, margin: "auto" }}
    >
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
            {regularCoaches &&
              regularCoaches.map((coach) => {
                let { icon, page, _id } = coach;
                return (
                  <div key={_id} className="coach-image rounded-full">
                    <Avatar src={icon} alt="Edzők" size="md" />
                  </div>
                );
              })}
          </Box>
        </CardContent>
        <CardContent sx={{ paddingBottom: "0px" }}>
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
        <CardContent sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
          <hr />
        </CardContent>
        <CardContent
          sx={{ padding: "0px 0px", paddingBottom: "0px !important" }}
        >
          <Box className="price-container sanyi">
            {coachSanyi && (
              <div className="sanyi-icon-image-container">
                <Avatar src={coachSanyi.icon} alt="Sanyi" size="md" />
              </div>
            )}
            <span className="price">{trainingPacket.priceSanyi}</span>{" "}
            <span className="upperindex">
              <span className="base-color-2">
                <b>HUF</b>
              </span>
              / hónap
            </span>
          </Box>
        </CardContent>
      </Box>
      <Box>
        <CardContent>
          {trainingItems &&
            trainingItems.map((item) => {
              const { description, title, _id } = item;

              const { services } = trainingPacket;
              const packetContain = services.findIndex((service) => {
                return service["_ref"] === _id;
              });

              const iconColor = packetContain > -1 ? "#2DC071" : "#BDBDBD";

              return (
                <Accordion
                  key={_id}
                  sx={{
                    boxShadow: "none",
                    border: "none!important",
                    marginBottom: "10px",
                  }}
                  className="training-item-container"
                >
                  <AccordionSummary
                    className="title"
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      marginBottom: "0px",
                      minHeight: "unset!important",
                      height: "auto",
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="large"
                      sx={{
                        verticalAlign: "middle",
                        marginRight: "5px",
                        color: iconColor,
                      }}
                    />
                    <Typography sx={{ textAlign: "left" }}>{title}</Typography>
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
        </CardContent>
      </Box>
      <Box>
        <CardContent>
          <div className="button btn center">Edzéstervet kérek!</div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PriceCard;
