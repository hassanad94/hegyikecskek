import Masonry from "react-masonry-css";
import { useState } from "react";
import Image from "next/future/image";
import {
  Close as CloseIcon,
  NavigateNext,
  NavigateBefore,
} from "@mui/icons-material";
import { te } from "date-fns/locale";

const GallerySection = ({ images }) => {
  const imgs = images?.map((image) => ({
    src: image,
    width: 575,
    height: 350,
    alt: "Galéria képek",
  }));
  const [tempimg, setTempimg] = useState(-1);

  const [model, setModel] = useState(false);

  if (!images?.length) {
    return <>☝🏽☝🏽☝🏽Kérlek válasz a szűrők közül. ☝🏽☝🏽☝🏽</>;
  }

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const getImage = (image) => {
    setTempimg(image);
    setModel(true);
  };

  console.log(tempimg);

  //*navigate next and before should be relative. so after imageslength it should be 0 and after 0 it should be imageslength

  return (
    <>
      {model && (
        <div className={model ? "model open" : "model"}>
          <Image
            src={images[tempimg]}
            alt="galery item"
            title=""
            fill
            sizes="100vw"
          />
          <NavigateBefore
            className="prev"
            onClick={() =>
              setTempimg((tempimg - 1 + images.length) % images.length)
            }
          />
          <NavigateNext
            className="next"
            onClick={() => setTempimg((tempimg + 1) % images.length)}
          />
          <CloseIcon className="close-model" onClick={() => setModel(false)} />
        </div>
      )}
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imgs?.map((image, i) => {
          return (
            <div
              key={image + i}
              className="gallery-image-container"
              onClick={() => getImage(i)}
            >
              <Image
                src={image}
                alt="galery item"
                title=""
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 34vw"
              />
            </div>
          );
        })}
      </Masonry>
    </>
  );
};
export default GallerySection;
