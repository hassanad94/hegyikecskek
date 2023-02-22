import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import Image from "next/image";
import { urlForImage } from "../lib/client";
import { useStateContext } from "../context/settingContext";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CoachesPreview = ({ coaches }) => {
  const { currentDevice } = useStateContext();

  if (currentDevice === "desktop") {
    return (
      <div className="all-coach">
        {coaches &&
          coaches?.map((coach, i) => {
            let profilSrc =
              coach.icon !== null && urlForImage(coach.icon).width(400).url();

            return (
              <Link key={coach.name} href={`/edzoink/${coach.page.current}`}>
                <div className="coach-slide center cursor">
                  <div className="image-container">
                    <Image
                      alt="Edzők Kép"
                      title={coach.name}
                      layout="fill"
                      src={profilSrc}
                    />
                  </div>

                  <p className="center">{coach.name}</p>
                </div>
              </Link>
            );
          })}
      </div>
    );
  }

  return (
    <Swiper
      loop={true}
      spaceBetween={5}
      slidesPerView={3}
      modules={[FreeMode, Navigation]}
      navigation
      freeMode={true}
    >
      {coaches &&
        coaches?.map((coach, i) => {
          let profilSrc =
            coach.icon !== null && urlForImage(coach.icon).width(400).url();

          console.log(coach);

          return (
            <SwiperSlide key={i}>
              <Link href={`/edzoink/${coach.page.current}`}>
                <div className="coach-slide center cursor">
                  <div className="image-container">
                    <Image
                      alt="Edzők Kép"
                      title={coach.name}
                      layout="fill"
                      src={profilSrc}
                    />
                  </div>
                  <p className="center">{coach.name}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export const CoachSelectorButton = ({ coach }) => {
  const { scrollToElement } = useStateContext();

  const { icon, name, web } = coach;

  return (
    <>
      <div
        onClick={() =>
          scrollToElement(`.coach-preview-card[data-web='${web}']`)
        }
        className="button coach-select flex"
        data-web={coach.web}
      >
        <div className="coach-image flex">
          <Image
            width={34}
            height={50}
            objectFit="contain"
            src={icon}
            alt="Edző icon"
          />
        </div>
        <div className="name">{name}</div>
      </div>
    </>
  );
};
