
// import Favourites from "./Favourites/Favourites";
import "./FourthSection.scss";
import Landscapes from "./Lanscapes/Landscapes";


const baseUrl="http://localhost:3001/ocio/rutas";


export default function FourthSection() {
    return (
       
            <section className="fourth__section">
                <Landscapes />
                {/* <Favourites /> */}
              
            </section>
        
    )
}