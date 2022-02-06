import ParqueCampoDelMoro from '../Recursos/img/ParqueCampoDelMoro.jfif';
import ParqueDelCapricho from '../Recursos/img/ParqueDelCapricho.jfif';
import ParqueDelOeste from '../Recursos/img/ParqueDelOeste.jpg';
import ParqueDelRetiro from '../Recursos/img/ParqueDelRetiro.jfif';
import ParqueEuropa from '../Recursos/img/ParqueEuropa.jpg';
import ParqueJuanCarlosI from '../Recursos/img/ParqueJuanCarlosI.jpg';
import ParqueMadridRio from '../Recursos/img/ParqueMadridRio.jpg';
import TemploDebod from '../Recursos/img/TemploDebod.jpg';

const ParquesColumnaUno = [
    {
        'nombre': ParqueDelRetiro,
        'url': 'https://es.wikipedia.org/wiki/Parque_del_Retiro_de_Madrid',
        'texto': 'Parque Del Retiro',
        'id':'p1'
    },
    {
        'nombre': ParqueMadridRio,
        'url': 'https://es.wikipedia.org/wiki/Madrid_R%C3%ADo',
        'texto': 'Parque Madrid Rio',
        'id':'p2'
    },
    {
        'nombre': ParqueDelOeste,
        'url': 'https://es.wikipedia.org/wiki/Parque_del_Oeste_(Madrid)',
        'texto': 'Parque Del Oeste',
        'id':'p3'
    },
    {
        'nombre': ParqueEuropa,
        'url': 'https://es.wikipedia.org/wiki/Parque_Europa_(Torrej%C3%B3n_de_Ardoz)',
        'texto': 'Parque Europa',
        'id':'p4'
    }
]

const ParquesColumnaDos = [
    {
        'nombre': ParqueDelCapricho,
        'url': 'https://es.wikipedia.org/wiki/Parque_de_El_Capricho',
        'texto': 'Parque Del Capricho',
        'id':'p5'
    },
    {
        'nombre': TemploDebod,
        'url': 'https://es.wikipedia.org/wiki/Templo_de_Debod',
        'texto': 'Templo Debod',
        'id':'p6'
    },
    {
        'nombre': ParqueJuanCarlosI,
        'url': 'https://es.wikipedia.org/wiki/Parque_Juan_Carlos_I',
        'texto': 'Parque Juan Carlos I',
        'id':'p7'
    },
    {
        'nombre': ParqueCampoDelMoro,
        'url': 'https://es.wikipedia.org/wiki/Campo_del_Moro',
        'texto': 'Parque Campo Del Moro',
        'id':'p8'
    }
]


export default function ImagenParque() {
    return(
        <div className='cultura-parques__container'>
            <div className='cultura-parques_contenido'>
                <div className='parques_contenido__imagenes'>
                    {
                        ParquesColumnaUno.map(function (props) {
                            return(
                                <div key={props.id}>
                                    <a key={props.id} href={props.url} ><img className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id} src={props.nombre} alt={props.texto}></img></a>
                                    <figcaption className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id + ' parques_contenido__imagenes--imagen--texto'}>{props.texto}</figcaption>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='cultura-parques_contenido'>
                <div className='parques_contenido__imagenes'>
                    {
                        ParquesColumnaDos.map(function (props) {
                            return(
                                <div key={props.id}> 
                                    <a href={props.url} ><img className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id} src={props.nombre} alt={props.texto}></img></a>
                                    <figcaption className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id + ' parques_contenido__imagenes--imagen--texto'}>{props.texto}</figcaption>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}