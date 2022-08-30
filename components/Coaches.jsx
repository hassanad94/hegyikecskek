import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y,FreeMode } from 'swiper';
import Image from 'next/image';
import {urlForImage } from '../lib/client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const CoachesPreview = ({ coaches }) => {

  return (
    
    <Swiper
        breakpoints={{
          320: {
            spaceBetween:5,
            slidesPerView: 2,
          },
          375: {
            slidesPerView: 3,
            spaceBetween:15,
          },
          800: {
            slidesPerView: 4,
          }
        }}
        modules={[FreeMode,Navigation, Scrollbar, A11y]}
        navigation
        freeMode={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(swiper) => console.log('slide change',swiper)}
    >
      { coaches && coaches.map((coach, i) => {

        let profilSrc = urlForImage(coach.hero).url();

        return ( 
        
        <SwiperSlide key={i}>
                  
          <div className="coach-slide center"> 
          
            <Image alt="Edzők Kép" title={coach.name}  width={150} height={150} src={profilSrc}/>

            <p className='center'>{coach.name}</p>

          </div>

        </SwiperSlide>)

      })}
      
      
      
    </Swiper>
  );
}


