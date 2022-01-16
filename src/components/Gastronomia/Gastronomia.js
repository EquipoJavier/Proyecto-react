import React from 'react';
import IntrodGastro from './FirstSection/IntrodGastro';
import Platos from './SecondSection/Platos';
import './Gastronomia.scss';

export default function Gastronomia() {
    return (
        <>  
            <IntrodGastro />
            <Platos title="Platos con historia"/>
        </>
    )
}