import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@material-ui/core";
import "./CrudImageList.scss";
import {makeStyles} from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({


  boton: {
    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    borderRadius: '3px',
    fontSize: '16px',
    border: '0',
    color: 'white',
    height: '48px',
    padding:' 0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    marginBottom: '6rem'
  },

  text: {
    fontSize:'10rem'
  }


}))

export default function CrudImageList({
  images,
  abrirCerrarModalInsertar,
  selectImage,
}) {
  const styles= useStyles();
  return (
    <div className="favourites__list"> 
      <Button className={styles.boton} onClick={() => abrirCerrarModalInsertar()}>Inserta Ruta</Button>
      <ImageList className="favourites__list--component" sx={{ width: '80rem', height: '50rem' }} cols={2} >
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">MIS RUTAS FAVORITAS</ListSubheader>
        </ImageListItem>
        {JSON.stringify(images) !== "[]" &&
          images.map(function (image) {
                  return (
                      <ImageListItem key={image.id}>
                          <img src={image.image} srcSet={image.image} alt={image.name} loading="lazy" />
                          <ImageListItemBar
                              title={image.name}
                              className="favourites__list--bar"  
                              actionIcon={<IconButton style={{height :"8rem"}}
                                  sx={{ color: "rgba(255, 255, 255, 0.54)"}}
                                 
                                  onClick={function (event) {selectImage(image, "Editar")}}
                              >
                                  <InfoIcon style={{height :"3rem", width:"3rem"}} />
                              </IconButton>}
                          ></ImageListItemBar>
                      </ImageListItem>
                  );
              })}
      </ImageList>
    </div>
  );
}
