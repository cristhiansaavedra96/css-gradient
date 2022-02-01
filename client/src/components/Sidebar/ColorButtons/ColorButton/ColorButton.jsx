import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ColorButton.css';

const ColorButton = ({ color, link }) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(link, { replace: true });
    }

    let parsedColor = "";
    if (color === "azure") {
        parsedColor = "#bdffff";
    } else if (color === "monochrome") {
        parsedColor = "#dcdcdc";
    } else if (color ==="pink"){
        parsedColor = "#fe7f9c";
    } else {
        parsedColor = color;
    }

    const style = {
        background: parsedColor
    }

    return (
        <button
            className="color__button"
            type="button"
            style={style}
            onClick={(e) => handleClick(e)}>
        </button>)
        ;
};

export default ColorButton;
