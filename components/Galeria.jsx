import React, { useEffect, useState } from "react";
import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import 'swiper/css/navigation';


export default function App({galeria}) {

    const [ index, setIndex] = useState( 0 );

    useEffect(() => {

      console.log( "fut" )

      document.querySelector( ".galeria-container .small-image .selected-image" ).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
      
      if( index == 0 ){
        
        document.querySelector( ".galeria-container .swiper-button-prev" ).classList.add( "swiper-button-disabled" );

      }
      
      if( index === galeria.length - 1 ){
        
        document.querySelector( ".galeria-container .swiper-button-next" ).classList.add( "swiper-button-disabled" );

      }

      return () => {

       const buttons = document.querySelectorAll( ".galeria-container .swiper-button-disabled" );

       for (let i = 0; i < buttons.length; i++) {
      
        const button = buttons[i];
        
        button.classList.remove('swiper-button-disabled');
        
       }
        
      }
    
    }, [index] )
    

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

        <div className="img-nav flex">

          {galeria?.map((item, i) => {

            let src = item.indexOf( "images" ) > -1 ? item 
            : `https://img.youtube.com/vi/${item}/hqdefault.jpg`;

            return( 
            
                                
                <div className={i === index ? 'small-image selected' :"small-image" } key={i} onClick={ () => setIndex( i ) }>

                  <Image layout="fill"
                    src={src}
                    className={i === index ? 'selected-image' :"" }
                    /> 
                  
                </div>
    

              )
            })}     

        </div>

        <div className="buttons">

          <div className="swiper-button-next" onClick={() => setIndex( (prev) =>  prev + 1)}></div>
          <div className="swiper-button-prev" onClick={() => setIndex( (prev) =>  prev - 1)}></div>

        </div>     


      </>
    );
}
