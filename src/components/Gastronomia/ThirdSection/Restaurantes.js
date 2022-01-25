

import restBotin from '../../Recursos/img/restaurante-botin.jpg';
import restBola from '../../Recursos/img/restaurante-la-bola.jpg';
import restLucio from '../../Recursos/img/restaurante-casa-lucio.jpg';
import restCandelas from '../../Recursos/img/restaurante-cuevas-luis-candelas.jpg';

import './Restaurantes.scss';
import RestaurantTextbox from './RestaurantTextbox/RestaurantTextbox';

export default function Restaurantes(props) {
    const restaurantes = [
        {
            name: "Restaurante Botín",
            img: restBotin,
            descr: "El restaurante más antiguo del mundo se encuentra en España, y más concretamente en pleno Madrid de los Austrias. Este local de 1725 actualmente es un restaurante con cuatro plantas que sigue conservando el encanto de antigua posada. Ofrece lo mejor de la cocina castiza de Madrid y de la cocina castellana. Las especialidades son el cochinillo asado y el cordero asado que se cocinan en un horno de leña antiguo. Otros platos que destacan son la sopa al cuarto de hora, la sopa castellana, la merluza de pincho, el lenguado fresco y las almejas en salsa. En cuanto a repostería, resaltan los bartolillos y el fresón de San Isidro.",
            url: "https://botin.es/"
        },        
        {
            name: "Taberna La Bola",
            img: restBola,
            descr: "Este restaurante es conocido por servir uno de los cocidos más ricos de Madrid. Su secreto reside en el método clásico de cocción, como se hacía antaño, a fuego lento y con carbón de encina. Además el cocido se prepara en pucheros de barro individuales, algo prácticamente único, y la elaboración de cada puchero llega hasta las cuatro horas. También está especializado en comida tradicional castellana, como son los callos a la madrileña y el cordero asado."
        },        
        {
            name: "Casa Lucio",
            img: restLucio,
            descr: "Casa Lucio es uno de los más emblemáticos restaurantes en Madrid. Se ha hecho popularmente conocido por los mejores huevos estrellados del mundo, en el que el secreto es la cocina de carbón. Para una primera visita, imprescindible degustar sus huevos, y en las siguientes ya se pueden explorar otros de sus platos. Destacan sus callos a la madrileña, el rabo de toro, la sopa de cebolla, el pisto con huevo, el cocido madrileño y la paletilla de cordero. "
        },        
        {
            name: "Cuevas de Luis Candelas",
            img: restCandelas,
            descr: "Es otro de los restaurantes más emblemáticos y conocidos de Madrid, situado junto a la Plaza Mayor, y que rinde homenaje al bandolero más conocido de Madrid, Luis Candelas, que habituaba a esconderse en el Arco de Cuchilleros tras sus robos, donde hoy se encuentra el restaurante. Un actor disfrazado de bandolero lo recuerda y da la bienvenida hoy día a todos los clientes. El interior tiene un ambiente muy castizo, y en su cocina se han recuperado todos los usos y costumbres que dan fundamento a la tradición gastronómica de Madrid. Sus especialidades son el cochinillo, el cordero lechal, los callos a la madrileña, el cocido de puchero y los postres típicos de Madrid."
        },
    ]

    return (
        <div className="restaurantes">
            <div className="restaurantes__titulo">
                <span className="restaurantes__titulo--heading">{props.title}</span>
            </div>

            {restaurantes.map((restaurant, index) => {
                if(index%2 === 0) {
                    return <RestaurantTextbox key={restaurant.name} restaurant={restaurant} imgOnRight={true}/>
                } else {
                    return <RestaurantTextbox key={restaurant.name} restaurant={restaurant} imgOnRight={false}/>
                }
            })}

        </div>
    )
}