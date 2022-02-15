import React from 'react';
import IntrodGastro from './FirstSection/IntrodGastro';
import Platos from './SecondSection/Platos';
import './Gastronomia.scss';
import Restaurantes from './ThirdSection/Restaurantes';
import { useOutletContext } from 'react-router-dom';

export default function Gastronomia() {

    const [done , pageEndPoint] = useOutletContext();


    return (
        <>  
            <IntrodGastro />
            <Platos title="Platos con historia" dishes={pageEndPoint} loading={!done}/>
            <Restaurantes title="Ven a probar la mejor gastronomía" restaurantes={pageEndPoint} loading={!done}/>
        </>
    )
}