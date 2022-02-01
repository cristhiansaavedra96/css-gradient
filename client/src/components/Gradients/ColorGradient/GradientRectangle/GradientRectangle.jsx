import React from 'react';
import './GradientRectangle.css';
import { useNavigate } from 'react-router-dom';

const getRandomColor = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const GradientRectangle = ({ colorsToUse }) => {

    const navigate = useNavigate();
    const parseColor = (color) => {
        return color.slice(1).toLowerCase();
    }

    let color1 = getRandomColor(colorsToUse);
    let color2 = getRandomColor(colorsToUse);
    let rectangleText = `${color1} — ${color2}`;

    const handleClick = (e) => {
        navigate(`/?c1=${parseColor(color1)}&c2=${parseColor(color2)}`, { replace: true });
    }

    const background = `linear-gradient(to right, ${color1}, ${color2})`;

    return (
        <div 
            className="gradient__rectangle"
            style={{background: background}}
            onClick={(e) => handleClick(e)}>
                {rectangleText}
        </div>
    );
};

export default GradientRectangle;
