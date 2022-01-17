import Boton from './Boton';
import Tarjetas from './Tarjetas';
import TituloSecundario from './TitulosSecundarios'
import ImagenParque from './ImagenesParques';
import ImagenOtrasVisitas from './ImagenesOtrasVisitas';


export default function Cultura() {
  return(
    <>
    <header></header>

    <aside></aside>

    <main>  
      
      <section>
        <TituloSecundario tituloSecundario={'Museos Que Visitar'} />
        <Tarjetas />
        <Boton boton={'Descuentos Museos'} />
      </section>

      <section>
        <TituloSecundario tituloSecundario={'Parques Que Visitar'} />
        <ImagenParque/>
        <Boton boton={'Rutas Organizadas','museos--button'} />
      </section>

      <section>
        <TituloSecundario tituloSecundario={'Otras Visitas'} />
        <ImagenOtrasVisitas/>
        <Boton boton={'Free Tours Por Madrid'} />
      </section>

    </main>

    <footer></footer>
    </>
  )
}



