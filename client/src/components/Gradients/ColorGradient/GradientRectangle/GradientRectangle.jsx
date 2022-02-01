import React from 'react';
import './GradientRectangle.css';
import { useNavigate } from 'react-router-dom';
import { useGradientRectangle } from '../../../../hooks/useGradientRectangle';

const GradientRectangle = ({ colorsToUse }) => {

    const navigate = useNavigate();
    const { rectangleText, background, url } = useGradientRectangle(colorsToUse);
    const handleClick = (e) => {
        navigate(url, { replace: true });
    }

    return (
        <div
            className="gradient__rectangle"
            style={{ background: background }}
            onClick={(e) => handleClick(e)}>
            {rectangleText}
        </div>
    );
};

export default GradientRectangle;
