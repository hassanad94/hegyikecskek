import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { useStateContext } from "../context/settingContext";

export default function GaleriaList({ images }) {
  const { currentDevice } = useStateContext();

  if (!images) {
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
        variant="woven"
        cols={currentDevice === "mobile" ? 2 : 3}
        gap={2}
      >
        {images?.map((item, i) => (
          <ImageListItem key={`${item}${i}`}>
            <Image
              layout="fill"
              src={`${item}?w=248&fit=crop&auto=format`}
              alt={`Galéria Kép ${i}`}
              objectFit="contain"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
