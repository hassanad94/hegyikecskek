import React, { useRef, useState } from "react";
import {urlForImage } from '../lib/client';
import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y,FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function App({galeria}) {

    const [ index, setIndex] = useState( 5 );

    return (
      <>
        <div className="image-container">

          { galeria[index].indexOf( "images" ) > -1 
          
            ? 
          
            <Image width="100%" height="100%" layout="responsive" objectFit="contain" src={galeria[index]} className="" />

            :

            <YoutubeEmbed embedId={galeria[index]} />
            
          }


        </div>

        <Swiper
            breakpoints={{
              320: {
                spaceBetween:0,
                slidesPerView: 3,
              },
              550: {
                slidesPerView: 4,
                spaceBetween:0,
              },
              800: {
                slidesPerView: 6,
              }
            }}
            modules={[FreeMode,Navigation, Scrollbar, A11y]}
            navigation
            freeMode={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={(swiper) => console.log('slide change',swiper)}
        >
          {galeria.map((item, i) => {

            let src = item.indexOf( "images" ) > -1 ? item 
            : `https://img.youtube.com/vi/${item}/hqdefault.jpg`;

            return( 
            
              <SwiperSlide key={i}>
                                
                <div className="small-image">

                  <Image layout="fill"
                    key={i}
                    src={src}
                    className={i === index ? 'small-image selected-image' : 'small-image'}
                    onClick={() => setIndex(i)}/> 
                  
                </div>
    
              </SwiperSlide>

              )
            })}
          
          
          
        </Swiper>

      </>
    );
}
