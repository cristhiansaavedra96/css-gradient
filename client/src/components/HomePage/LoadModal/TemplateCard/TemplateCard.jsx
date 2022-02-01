import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeShowLoadModal } from '../../../../reducers/modalReducer';
import './TemplateCard.css';
import { parseBackground } from '../../../../utils/parseBackground';

const TemplateCard = ({ template, theme }) => {
    let { direction, type, firstColor, secondColor, name, author } = template;
    const background = parseBackground(firstColor, secondColor, direction, type);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(`/template/${name}`, { replace: true });
        dispatch(changeShowLoadModal());
    }

    return (
        <div
            className={`load__template__card load__template__card__${theme}`}
            id={name}
            name={name}
            onClick={(e) => handleClick(e)}>
            <div className="load__template__gradient" style={{ background: background }}></div>
            <h3>{name}</h3>
            <h4>{author}</h4>
        </div>
    );
};

export default TemplateCard;
