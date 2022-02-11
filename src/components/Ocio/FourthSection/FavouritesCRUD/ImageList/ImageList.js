import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@material-ui/core";

export default function CrudImageList({
  images,
  abrirCerrarModalInsertar,
  selectImage,
}) {
  return (
    <>
      <Button onClick={() => abrirCerrarModalInsertar()}>Inserta Ruta</Button>
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {JSON.stringify(images) !== "[]" &&
          images.map(function (image) {
                  return (
                      <ImageListItem key={image.id}>
                          <img src={image.image} srcSet={image.image} alt={image.name} loading="lazy" />
                          <ImageListItemBar
                              title={image.name}
                              actionIcon={<IconButton
                                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                  aria-label={`info about ${image.name}`}
                                  onClick={function (event) {selectImage(image, "Editar")}}
                              >
                                  <InfoIcon />
                              </IconButton>}
                          ></ImageListItemBar>
                      </ImageListItem>
                  );
              })}
      </ImageList>
    </>
  );
}
