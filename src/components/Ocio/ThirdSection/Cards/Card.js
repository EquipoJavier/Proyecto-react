import "./Card.scss";
import frontCard1 from "../../../Recursos/img/fondo_second_section_1.gif";
import frontCard2 from "../../../Recursos/img/fondo_second_section_2.gif";
import frontCard3 from  "../../../Recursos/img/fondo_second_section_3.gif";
import frontCard4 from "../../../Recursos/img/fondo_second_section_4.gif";


const cards= [

    { 
        name: "card1",
        frontImage:frontCard1,
        backIcon: "../../../Recursos/img/icono parque atracciones.png",
        paragraph: "¡Ven a conocer el paraiso de la diversión! Con un montón de atracciones y adrenalina",
       
    },
    { 
        name:"card2",
        frontImage: frontCard2,
        backIcon: "../../../Recursos/img/icono warner.png",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus illo perspiciatis cumque aperiam temporibus deleniti",
    },
    { 
      name:"card3",
        frontImage: frontCard3,
        backIcon: "../../../Recursos/img/icono zoo.png",
        paragraph: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquamullam laboriosam quae at eligendi! At repellendus, cum neque nemo",
    },
    { 
      name:"card4",
        frontImage: frontCard4,
        backIcon: "../../../Recursos/img/icono faunia.png",
        paragraph: " Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam ullam laboriosam quae at eligendi! At repellendus, cumneque nemo",
    }

];

export default function Card(props){


return(
        <>
        <div className=" ">
          <div className="card--ocio">
            <div className="card--ocio__side card--ocio__side--front">
            {cards.map(function (item) {
              return item.name === props.name ? <img src={item.frontImage} alt="" /> : null;
            })}
            </div>
            <div className="card--ocio__side card--ocio__side--back card--ocio__side card--ocio__side--back-1">
              <div className="card--ocio__cta">
                {/* <img src={item.backIcon} alt=""/>
                <p>{item.paragraph}</p> */}
                <br />
                <a href="transportes.html">Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

  

