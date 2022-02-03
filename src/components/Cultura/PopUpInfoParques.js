import MadridAustrias from "../Recursos/img/MisteriosMadridAustrias.jpg";
import CasasEncantadas from "../Recursos/img/CasasEncantadas.jpg";
import MadridGaldos from "../Recursos/img/MadridGaldos.jpg";
import MadridSefardi from "../Recursos/img/madridSefardi.jpg"

const popUp = [
    {
        "nombre": MadridAustrias,
        "titulo": "Misterios y leyendas del Madrid de los Austrias",
        "id": 1
    },
    {
        "nombre": CasasEncantadas,
        "titulo": "Fantasmas y casas encantadas de Madrid",
        "id": 2
    },
    {
        "nombre": MadridGaldos,
        "titulo": "El Madrid de Benito Pérez Galdós",
        "id": 3
    },
    {
        "nombre": MadridSefardi,
        "titulo": "El Madrid Sefardí",
        "id": 4
    }
]

export default function PopUpInfoParques(){
    return(
        <div className="container_Info-PopUp-Parques">
            {
                popUp.map(function() {
                    return(
                        <div>
                            <img src={popUp.nombre}></img>
                            <h3>{popUp.titulo}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}