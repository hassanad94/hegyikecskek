import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, FreeMode } from "swiper";
import Image from "next/image";
import { urlForImage } from "../lib/client";
import { useStateContext } from "../context/settingContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CoachesPreview = ({ coaches }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          spaceBetween: 5,
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        800: {
          slidesPerView: 4,
        },
      }}
      modules={[FreeMode, Navigation, Scrollbar, A11y]}
      navigation
      freeMode={true}
    >
      {coaches &&
        coaches?.map((coach, i) => {
          let profilSrc = coach.hero !== null && urlForImage(coach.hero).url();

          return (
            <SwiperSlide key={i}>
              <div className="coach-slide center">
                <Image
                  alt="Edzők Kép"
                  title={coach.name}
                  width={150}
                  height={150}
                  src={profilSrc}
                />

                <p className="center">{coach.name}</p>
              </div>
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
          <Image width={40} height={40} src={icon} alt="Edző icon" />
        </div>
        <div className="name">{name}</div>
      </div>
    </>
  );
};
