import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useStateContext } from "../context/settingContext";

export default function GaleriaList({ images }) {
  const { currentDevice } = useStateContext();

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
          <ImageListItem key={item.img}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={`Galéria Kép ${i}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
