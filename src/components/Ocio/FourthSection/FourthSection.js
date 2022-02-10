
import Counter from "./contador";
// import Favourites from "./Favourites/Favourites";
import "./FourthSection.scss";
import Landscapes from "./Lanscapes/Landscapes";


const baseUrl="http://localhost:3001/ocio/rutas";


export default function FourthSection() {
    return (
        <>
            <section className="fourth__section">
                {/* <h2 className="fourth__section--title">DESCUBRE TUS RUTAS PARA DESCONECTAR</h2> */}
                <Landscapes />
                {/* <Favourites /> */}
                <Counter/>
            </section>
        </>
    )
}