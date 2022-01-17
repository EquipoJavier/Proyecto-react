import ListaTarjeta from "./ListaTarjetas";

const infoTarjetas = [
  {
    titulo:'Museo Del Prado',
    dirección:'Paseo Prado S/n.',
    metro:'Banco de España (Línea 2)',
    entradaGeneral:'15€',
    horario:'De lunes a sábado de 10.00 a 20.00h Domingos y festivos de 10.00 a 19.00h',
    id:'1'
  },
  {
    titulo:'Museo Reina Sofia',
    dirección:'Paseo Prado S/n.',
    metro:'Banco de España (Línea 2)',
    entradaGeneral:'15€',
    horario:'De lunes a sábado de 10.00 a 20.00h Domingos y festivos de 10.00 a 19.00h',
    id:'2'
  },
  {
    titulo:'Museo Thyssen',
    dirección:'Palacio de Villahermosa, Paseo del Prado 8.',
    metro:'Banco de España (Línea 2)',
    entradaGeneral:'12€',
    horario:'Lunes de 12.00 a 16.00, y de martes a domingos de 10.00 a 19.00 horas.',
    id:'3'
  },
  {
    titulo:'Museo Nacional de Ciencias Naturales',
    dirección:'José Gutiérrez Abascal, 2.',
    metro:'Gregorio Marañón, Nuevos Ministerios, Ríos Rosas',
    entradaGeneral:'7€',
    horario:'De martes a viernes de 10 a 17 horas Sábados, domingos y festivos de 10 a 20 horas',
    id:'4'
  }
];
export default function Tarjetas(){
    return(
      <div>
        {
          infoTarjetas.map(function(info){
            return (
              <>
              <div className="cultura-museo">
                <div className="cultura-museo__lado cultura-museo__lado--delante">
                  <div className={"cultura-museo__imagen cultura-museo__imagen--"+info.id}>
                    {/*aqui va la imagen */}
                    &nbsp;
                  </div>
                  <h4 className="cultura-museo__heading">
                    <span className={"cultura-museo__heading-span cultura-museo__heading-span--"+info.id}>{info.titulo}</span>
                  </h4>
                </div>  
                <div className={"cultura-museo__lado cultura-museo__lado--detras cultura-museo__lado--detras-"+info.id}>
                  <div className="cultura-museo__detalles">
                    <ul>            
                      < ListaTarjeta listaTarjeta={info}/>
                    </ul>
                  </div>
                </div>
              </div>
              </>            
            )
          })
        }
      </div>
    )
  }