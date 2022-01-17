export default function Boton(textoBoton, claseBoton) {
    const texto = textoBoton.boton;
    const clase = claseBoton.boton;
    console.log(clase);
    return(
        <>
        <a className={clase +" button"} href="#">{texto}</a> 
        </>           
    )
}