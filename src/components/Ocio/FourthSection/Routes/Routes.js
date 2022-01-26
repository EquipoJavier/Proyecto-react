import "./Routes.scss";
import landscape1 from "../../../Recursos/img/casa-campo.jpeg";
import landscape2 from "../../../Recursos/img/silla-felipe.jpg";
import landscape3 from "../../../Recursos/img/hayedo-de-montejo.jpg";
import landscape4 from "../../../Recursos/img/Palacio_Real_de_Aranjuez_0.webp";



const routes =[
    {
        name: "image1",
        text: "Ruta Casa de Campo",
        image: landscape1,
        id:"1",

    },

    {
        name: "image2",
        text: "Ruta de la silla de Felipe II",
        image: landscape2,
        id:"2",
    },

    {
        name: "image3",
        text: "Ruta de Hayedo de Montejo",
        image: landscape3,
        id:"3",
    },

    {
        name: "image4",
        text: "Palacio Aranjuez",
        image: landscape4,
        id:"4",
    }
]

export default function FourthSection(props) {
    return (
        <>
          {routes.map(function (item) {
              return <>
                <div className="routes">
                       <>{item.name === props.name ? <img key={item.id} className={`routes__img routes__img--${item.id}`} src={item.image} alt="" />: null}</>
                      <>{item.name === props.name ? <h4 key={item.id+"h4"} className={`routes__text routes__text--${item.id}`}>{item.text}</h4>: null}</>
                </div></> })};
        </>
         
    )
}