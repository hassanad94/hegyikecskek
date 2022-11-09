import React, { useEffect, useState } from "react";
import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import "swiper/css/navigation";

export function Galeria({ galeria }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const element = document.querySelector(
      ".galeria-container .small-image.selected"
    );

    document
      .querySelector(".galeria-container .img-nav")
      .scrollTo(element.offsetLeft, 0);

    if (index == 0) {
      document
        .querySelector(".galeria-container .swiper-button-prev")
        .classList.add("swiper-button-disabled");
    }

    if (index === galeria.length - 1) {
      document
        .querySelector(".galeria-container .swiper-button-next")
        .classList.add("swiper-button-disabled");
    }

    return () => {
      const buttons = document.querySelectorAll(
        ".galeria-container .swiper-button-disabled"
      );

      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.classList.remove("swiper-button-disabled");
      }
    };

    /*Le kell cserélni ez a hack-t.*/
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="image-container">
        {galeria[index].indexOf("images") > -1 ? (
          <Image
            alt="Galéria"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src={galeria[index]}
            className=""
          />
        ) : (
          <YoutubeEmbed embedId={galeria[index]} />
        )}
      </div>

      <div className="img-nav flex">
        <div className="buttons">
          <div
            className="swiper-button-next"
            onClick={() => setIndex((prev) => prev + 1)}
          ></div>
          <div
            className="swiper-button-prev"
            onClick={() => setIndex((prev) => prev - 1)}
          ></div>
        </div>
        {galeria?.map((item, i) => {
          let src =
            item.indexOf("images") > -1
              ? item
              : `https://img.youtube.com/vi/${item}/hqdefault.jpg`;

          return (
            <div
              className={i === index ? "small-image selected" : "small-image"}
              key={i}
              onClick={() => setIndex(i)}
            >
              <Image
                width={68}
                height={70}
                alt="Galéria Elem"
                title="Galéria Képe"
                src={src}
                className={i === index ? "selected-image" : ""}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
