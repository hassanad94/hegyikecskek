import PhotoAlbum from "react-photo-album";
import Lightbox from "react-image-lightbox";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
import "react-image-lightbox/style.css";
import { useState } from "react";

const GallerySection = ({ images }) => {
  const imgs = images?.map((image) => ({
    src: image,
    width: 575,
    height: 350,
    alt: "Galéria képek",
  }));
  const [index, setIndex] = useState(-1);

  if (!images?.length) {
    return <>☝🏽☝🏽☝🏽Kérlek válasz a szűrők közül. ☝🏽☝🏽☝🏽</>;
  }

  return (
    <div className="mb-8 lg:mb-20">
      <PhotoAlbum
        layout="columns"
        photos={imgs}
        onClick={({ index }) => {
          setIndex(index);
        }}
        columns={3}
      />

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
  );
};

export default GallerySection;
