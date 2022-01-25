import { useState } from 'react';
import './Button.scss';

export default function Button(props) {
    const [hovered, setHovered] = useState(false);

    function toggleHover() {
        setHovered(!hovered);
    }

    let hoverStyle;
    if(hovered) {
        hoverStyle = {
            backgroundColor: props.colorBG,
            color: props.colorFT
        }
    }
//onclick="location.href='https://google.com';
// REFACTOR BUTTON TO AN A TAG
    return (
        <button onClick={window.location.href=props.url} className='button' style={hoverStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
            {props.title}
        </button>
    )
}