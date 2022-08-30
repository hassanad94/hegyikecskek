import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y,FreeMode } from 'swiper';
import Image from 'next/image';
import {urlForImage } from '../lib/client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const ReviewCard = ({reviews}) => {

  return (
    <Swiper
        breakpoints={{
          320: {
            spaceBetween:0,
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
            spaceBetween:5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween:10,
          }
        }}
        modules={[FreeMode,Navigation, Scrollbar, A11y]}
        navigation
        freeMode={true}
        className="review-cards"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(swiper) => console.log('slide change',swiper)}
    >
      { reviews && reviews.map((review, i) => {

        let profilSrc = urlForImage(review.hero).url();

        return ( 
        
        <SwiperSlide key={i}>

            <div className="card">

                <div className="qvot">
                    <Image alt="Idéző jél" title={"ídézőjel"}  layout="fill" src="/img/qvot.png" />
                </div>
                
                <div className="card-content flex center"> 
                
                    <p className='center'>{review.review}</p>

                    <div className="profile-pic">
                        <Image alt="Profil kép" title={review.name}  layout="fill" src={profilSrc}/>
                    </div>


                </div>

                <div className="name">

                    ━ <span>{review.name}</span>

                </div>

            </div>
                  

        </SwiperSlide>)

      })}
      
      
      
    </Swiper>
  )

}


