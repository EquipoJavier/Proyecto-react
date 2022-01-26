import "./Card.scss";
import frontCard1 from "../../../Recursos/img/fondo_second_section_1.gif";
import frontCard2 from "../../../Recursos/img/fondo_second_section_2.gif";
import frontCard3 from  "../../../Recursos/img/fondo_second_section_3.gif";
import frontCard4 from "../../../Recursos/img/fondo_second_section_4.gif";

import backImage1 from "../../../Recursos/img/icono_parque_atracciones.png";
import backImage2 from "../../../Recursos/img/icono_warner.png";
import backImage3 from "../../../Recursos/img/icono_zoo.png";
import backImage4 from "../../../Recursos/img/icono_faunia.png";


const cards= [

    { 
        name: "card1",
        frontImage:frontCard1,
        backIcon: backImage1,
        paragraph: "¡Ven a conocer el paraiso de la diversión! Con un montón de atracciones y adrenalina",
        colorBackground: "linear-gradient(to right bottom,#85745b,#9b9678)",
        id:"1",
       
    },
    { 
        name:"card2",
        frontImage: frontCard2,
        backIcon: backImage2,
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus illo perspiciatis cumque aperiam temporibus deleniti",
        id:"2",
      },
    { 
      name:"card3",
        frontImage: frontCard3,
        backIcon: backImage3, 
        paragraph: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquamullam laboriosam quae at eligendi! At repellendus, cum neque nemo",
        id:"3",
      },
    { 
      name:"card4",
        frontImage: frontCard4,
        backIcon: backImage4,
        paragraph: " Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam ullam laboriosam quae at eligendi! At repellendus, cumneque nemo",
        id:"4",
      }

];

export default function Card(props){


return(
        <>
          <div className="card--ocio">
            <div className="card--ocio__side card--ocio__side--front">
            {cards.map(function (item) {
              return <>
                <>{item.name === props.name ? <img key={item.id} src={item.frontImage} alt="" /> : null}</>
              <div key={item.id+"id"} style={{ backgroundImage: `${item.colorBackground}`}} className="card--ocio__side card--ocio__side--back card--ocio__side card--ocio__side--back">
                  <div className="card--ocio__cta">
                   <>{item.name === props.name ? <><img key={item.id+"img"} src={item.backIcon} alt="" /><p>{item.paragraph}</p></> : null}</>
                  </div>
                  <br />
                  <a href="transportes.html">Cómo llegar</a>
                </div></>})}
            </div>
          </div>
        </>
    );
}

  

