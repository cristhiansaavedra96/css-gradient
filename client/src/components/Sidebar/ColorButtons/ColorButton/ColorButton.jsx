import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useColorButton } from '../../../../hooks/useColorButton';
import './ColorButton.css';

const ColorButton = ({ color, link }) => {

    const navigate = useNavigate();
    const { style } = useColorButton(color);

    const handleClick = (e) => {
        navigate(link, { replace: true });
    }

    return (
        <button
            className="color__button"
            type="button"
            style={style}
            onClick={(e) => handleClick(e)}>
        </button>);
};

export default ColorButton;
