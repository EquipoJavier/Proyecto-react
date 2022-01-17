import ParqueCampoDelMoro from './Recursos/img/ParqueCampoDelMoro.jfif';
import ParqueDelCapricho from './Recursos/img/ParqueDelCapricho.jfif';
import ParqueDelOeste from './Recursos/img/ParqueDelOeste.jpg';
import ParqueDelRetiro from './Recursos/img/ParqueDelRetiro.jfif';
import ParqueEuropa from './Recursos/img/ParqueEuropa.jpg';
import ParqueJuanCarlosI from './Recursos/img/ParqueJuanCarlosI.jpg';
import ParqueMadridRio from './Recursos/img/ParqueMadridRio.jpg';
import TemploDebod from './Recursos/img/TemploDebod.jpg';

const Parques = [
    {
        'nombre': ParqueDelRetiro,
        'url': 'https://es.wikipedia.org/wiki/Parque_del_Retiro_de_Madrid',
        'texto': 'Parque Del Retiro'
    },
    {
        'nombre': ParqueMadridRio,
        'url': 'https://es.wikipedia.org/wiki/Madrid_R%C3%ADo',
        'texto': 'Parque Madrid Rio'
    },
    {
        'nombre': ParqueDelOeste,
        'url': 'https://es.wikipedia.org/wiki/Parque_del_Oeste_(Madrid)',
        'texto': 'Parque Del Oeste'
    },
    {
        'nombre': ParqueEuropa,
        'url': 'https://es.wikipedia.org/wiki/Parque_Europa_(Torrej%C3%B3n_de_Ardoz)',
        'texto': 'Parque Europa'
    },
    {
        'nombre': ParqueDelCapricho,
        'url': 'https://es.wikipedia.org/wiki/Parque_de_El_Capricho',
        'texto': 'Parque Del Capricho'
    },
    {
        'nombre': TemploDebod,
        'url': 'https://es.wikipedia.org/wiki/Templo_de_Debod',
        'texto': 'Templo Debod'
    },
    {
        'nombre': ParqueJuanCarlosI,
        'url': 'https://es.wikipedia.org/wiki/Parque_Juan_Carlos_I',
        'texto': 'Parque Juan Carlos I'
    },
    {
        'nombre': ParqueCampoDelMoro,
        'url': 'https://es.wikipedia.org/wiki/Campo_del_Moro',
        'texto': 'Parque Campo Del Moro'
    }
]

export default function ImagenParque() {
    return(
        <div>
            <div>
                {
                    Parques.map(function (nomImagen) {
                        return(
                            <> 
                                <a href={nomImagen.url}><img src={nomImagen.nombre} alt={nomImagen.texto}></img></a>
                                <figcaption>{nomImagen.texto}</figcaption>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}