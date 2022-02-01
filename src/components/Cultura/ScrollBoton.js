import React, {useState} from 'react';

// import {FaArrowCircleUp} from 'react-icons/fa';
// import { a } from './Styles';
  
const BotonScroll = () =>{
  
  const [visible, setVisible] = useState(false);
  
  function scrollToTop(){
    return(
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    )
  };

  const visibilidadBoton = () => {
    const scrolled = document.documentElement.scrollTop;   //La propiedad scrollTop establece o devuelve el número de píxeles que el contenido de un elemento se desplaza verticalmente.
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  
   window.addEventListener('scroll', visibilidadBoton);
  
  return (
    <a className='botonScroll' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
        Arriba
    </a>
  );
}
  
export default BotonScroll;