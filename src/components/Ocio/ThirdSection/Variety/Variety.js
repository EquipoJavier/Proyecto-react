import Slider from "infinite-react-carousel";
import ImageBackground from "../../../Recursos/img/peliculas-rodadas-madrid.webp";
import "./Variety.scss";

const cards = [
  {
    name: "Peliculas y series para ver Madrid",
    image: ImageBackground,
    text: "Conoce las distintas series y películas rodadas en Madrid. Directores como Pedro Almodóvar han realizado casi toda su filmografía en la capital española",
    id: 1,
  },
  {
    name: "Estilo",
    image: ImageBackground,
    text: "Conoce las distintas series y películas rodadas en Madrid. Directores como Pedro Almodóvar han realizado casi toda su filmografía en la capital española",
    id: 2,
  },
  {
    name: "MAPAS",
    image: ImageBackground,
    text: "Conoce las distintas series y películas rodadas en Madrid. Directores como Pedro Almodóvar han realizado casi toda su filmografía en la capital española",
    id: 3,
  },
  {
    name: "COCO",
    image: ImageBackground,
    text: "Conoce las distintas series y películas rodadas en Madrid. Directores como Pedro Almodóvar han realizado casi toda su filmografía en la capital española",
    id: 4,
  },
];

const settings = {
  autoplay: true,
  dots: true,
};

export default function Variety() {
  return (
    <div className="slider__variety">
      <Slider {...settings}>
        {cards.map((card) => {
          return (
            <>
            <div key={card.id + "id"} className="slider__variety--each">
              <img
                src={card.image}
                className="slider__variety--each-image"
                alt=""
              />
              </div>
              <div className="slider__variety--content">
                <h2>{card.name}</h2>
                <p>{card.text}</p>
              </div>
              </>
          );
        })}
      </Slider>
    </div>
  );
}
