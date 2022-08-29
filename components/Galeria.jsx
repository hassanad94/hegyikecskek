import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {

    const [ index, setIndex] = useState( 0 );

    return (
      <>
        <div className="image-container">
        <img src={urlFor(image && image[index])} className="product-detail-image" />
        </div>
        <div className="small-images-container">
        {image?.map((item, i) => (
            <img 
            key={i}
            src={urlFor(item)}
            className={i === index ? 'small-image selected-image' : 'small-image'}
            onClick={() => setIndex(i)}
            />
        ))}
        </div>
      </>
    );
}
