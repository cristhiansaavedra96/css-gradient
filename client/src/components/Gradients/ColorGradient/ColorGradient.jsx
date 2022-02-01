import React from 'react';
import GradientRectangle from './GradientRectangle';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import './ColorGradient.css';
import { useColorGradient } from '../../../hooks/useColorGradient';

const ColorGradient = ({ color }) => {

    const theme = useTheme();
    const { colorTitle, colorsToUse, gradientsId } = useColorGradient(color);
    const navigate = useNavigate();

    const handleReload = () => {
        navigate(`/${color}-gradient-backgrounds`, { replace: true });
    }
    const handleCreateNew = () => {
        navigate(`/`, { replace: true });
    }

    return (
        <article className="article__container">
            <div className={`article__header article__header__${theme}`}>
                <h2>{colorTitle} Gradient Colors</h2>
                <button type="button" onClick={() => handleReload()}>Reload</button>
                <button type="button" onClick={() => handleCreateNew()}>Create New</button>
            </div>
            <div className="gradients__container">
                {gradientsId.map((e) =>
                    <GradientRectangle colorsToUse={colorsToUse} key={e} />
                )}
            </div>
        </article>
    );
};

export default ColorGradient;