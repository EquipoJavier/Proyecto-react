import React from 'react';
import IntrodGastro from './FirstSection/IntrodGastro';
import Platos from './SecondSection/Platos';
import './Gastronomia.scss';
import Restaurantes from './ThirdSection/Restaurantes';

export default function Gastronomia() {
    return (
        <>  
            <IntrodGastro />
            <Platos title="Platos con historia"/>
            <Restaurantes />
        </>
    )
}