import PalacioReal from './Recursos/img/PalacioReal.jpg';
import Matadero from './Recursos/img/Matadero.jpg';
import EstacionFantasmaDeChamberi from './Recursos/img/EstacionFantasmaChamberi.jpg';
import PuertaDeAlcala from './Recursos/img/PuertaAlcala.jpg';
import TeatroReal from './Recursos/img/TeatroReal.jpg';
import CatedralDeLaAlmudena from './Recursos/img/CatedralAlmudena.jpg';
import CuatroTorres from './Recursos/img/CuatroTorres.jpg';
import PlazaDeEspaña from './Recursos/img/PlazaEspaña.jpg';
import PlazaMayor from './Recursos/img/PlazaMayor.jpg';


const OtrasVisitas = [
    {
        'nombre': PalacioReal,
        'texto': 'Palacio Real'
    },
    {
        'nombre': Matadero,
        'texto': 'Matadero'
    },
    {
        'nombre': EstacionFantasmaDeChamberi,
        'texto': 'Estacion Fantasma De Chamberi'
    },
    {
        'nombre': PuertaDeAlcala,
        'texto': 'Puerta De Alcala'
    },
    {
        'nombre': TeatroReal,
        'texto': 'Teatro Real'
    },
    {
        'nombre': CatedralDeLaAlmudena,
        'texto': 'Catedral De La Almudena'
    },
    {
        'nombre': CuatroTorres,
        'texto': 'Cuatro Torres'
    },
    {
        'nombre': PlazaDeEspaña,
        'texto': 'Plaza De España'
    },
    {
        'nombre': PlazaMayor,
        'texto': 'Plaza Mayor'
    },
]

export default function ImagenOtrasVisitas() {
    return(
        <>
            {
                OtrasVisitas.map(function (imagen) {
                    return(
                        <div>
                            <div><img src={imagen.nombre}></img></div>
                            <figcaption>{imagen.texto}</figcaption>
                        </div>
                    )
                })
            }
        </>
    )    
}