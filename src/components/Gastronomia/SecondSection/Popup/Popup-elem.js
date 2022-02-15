import HiddenBox from './Popup-elemHidden';
import { useState } from 'react';
import './Popup.scss';

export default function PopupElem(props) {
    const dish = props.dish;
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>
        <img className="popup__img--thumbnail" src={dish.img} alt={dish.name} />
        <span className="popup__img--name" onClick={function() {
            setButtonPopup(true)
        }}>{dish.name}</span>

        <HiddenBox dish={dish} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup}/>
        </>
    )
}