import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { useStateContext } from "../context/settingContext";

export default function GaleriaList({ images }) {
  const { currentDevice } = useStateContext();

  if (images.length === 0) {
    return <>☝🏽☝🏽☝🏽Kérlek válasz a szűrők közül. ☝🏽☝🏽☝🏽</>;
  }

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "scroll",
        width: "100%",
        margin: "auto",
        maxWidth: "750px",
        maxHeight: "450px",
      }}
      className="galeria-box"
    >
      <ImageList
        variant="masonry"
        cols={currentDevice === "mobile" ? 2 : 3}
        gap={10}
      >
        {images?.map((item, i) => (
          <ImageListItem key={`${item}${i}`}>
            <Image
              width={300}
              height={150}
              src={`${item}?w=248&fit=crop&auto=format`}
              alt={`Galéria Kép ${i}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
