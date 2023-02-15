import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { useStateContext } from "../context/settingContext";
import PhotoAlbum from "react-photo-album";
import Lightbox from "react-image-lightbox";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
import "react-image-lightbox/style.css";
import { useState } from "react";

const GallerySection = ({ images }) => {
  const imgs = images?.map((image) => ({
    src: image,
    width: 1980,
    height: 1080,
    alt: "Galéria képek",
  }));
  const [index, setIndex] = useState(-1);

  if (!images?.length) {
    return <>☝🏽☝🏽☝🏽Kérlek válasz a szűrők közül. ☝🏽☝🏽☝🏽</>;
  }

  return (
    <section className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0">
      {/* photo album */}
      <div className="mb-8 lg:mb-20">
        <PhotoAlbum
          layout="masonry"
          photos={imgs}
          onClick={({ index }) => {
            console.log(index);
            setIndex(index);
          }}
          // onClick={(event, photo, index) => {
          //   console.log(index);
          //   setIndex(index);
          // }}
        />

        {/* <Lightbox
          slides={imgs}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        /> */}

        {/* kell egy külön state open/close-ra */}

        {index > -1 && (
          <Lightbox
            reactModalStyle={{ zindex: "99999999" }}
            mainSrc={images[index]}
            nextSrc={images[(index + 1) % images.length]}
            prevSrc={images[(index + images.length - 1) % images.length]}
            onCloseRequest={() => setIndex(-1)}
            onMovePrevRequest={() =>
              setIndex((index + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setIndex((index + 1) % images.length)}
            enableZoom={false}
          />
        )}
      </div>
    </section>
  );
};

export default GallerySection;
