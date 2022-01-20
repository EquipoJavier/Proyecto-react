import "./Card.scss";

const cards= [

    { 
        frontImage: "../../../Recursos/img/fondo_second_section_1.gif",
        backIcon: "../../../Recursos/img/icono parque atracciones.png",
        paragraph: "¡Ven a conocer el paraiso de la diversión! Con un montón de atracciones y adrenalina",
    },
    { 
        frontImage: "../../../Recursos/img/fondo_second_section_2.gif",
        backIcon: "../../../Recursos/img/icono warner.png",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus illo perspiciatis cumque aperiam temporibus deleniti",
    },
    { 
        frontImage: "../../../Recursos/img/fondo_second_section_3.gif",
        backIcon: "../../../Recursos/img/icono zoo.png",
        paragraph: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquamullam laboriosam quae at eligendi! At repellendus, cum neque nemo",
    },
    { 
        frontImage: "../../../Recursos/img/fondo_second_section_4.gif",
        backIcon: "../../../Recursos/img/icono faunia.png",
        paragraph: " Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam ullam laboriosam quae at eligendi! At repellendus, cumneque nemo",
    }

]

export default function Card(props){

    const name = props.name;
    const card = cards[name];

    console.log(card);

    return (
        <>
        <div className=" ">
          <div className="card--ocio">
            <div className="card--ocio__side card--ocio__side--front">
              <img src={card.frontImage} alt="" />
            </div>
            <div className="card--ocio__side card--ocio__side--back card--ocio__side card--ocio__side--back-1">
              <div className="card--ocio__cta">
                <img src={card.backIcon} alt=""/>
                <p>{card.paragraph}</p>
                <br />
                <a href="transportes.html">Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}


