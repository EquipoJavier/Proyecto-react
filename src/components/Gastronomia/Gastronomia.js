import React from 'react';
import Popup from "../Popup/Popup";
import IntroText from './FirstSection/IntroText';
import './Gastronomia.scss';

const introText = "Madrid tiene una fuerte cultura gastronómica, con platos tradicionales que se han transcendido fronteras y se han establecido como patrimonio no sólo de la ciudad, sino de toda España. <br>Platos como el cocido madrileño o la tortilla de patatas, postres y desayunos como los churros con chocolate, o incluso unas deliciosas tapas acompañando una buena cerveza en una terraza son patrimonio no sólo madrileño, sino español. <br>Ven a visitar los mejores restaurantes de Madrid y disfruta de una tradición gastronómica inigualable."

export default function Gastronomia() {
    return (
        <>  
            <IntroText introText={introText}/>
            <Popup />
        </>
    )
}