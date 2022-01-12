import React from 'react';
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
import './Gastronomia.scss';

export default function Gastronomia() {
    return (
        <>  
            <Link to="/">App</Link>
            <Popup />
        </>
    )
}