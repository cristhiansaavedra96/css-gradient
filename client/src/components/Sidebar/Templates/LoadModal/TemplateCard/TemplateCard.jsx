import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getParsedDirection } from '../../../../../utils/parseCss';
import { useDispatch } from 'react-redux';
import { changeShowLoadModal } from '../../../../../reducers/modalReducer';
import './TemplateCard.css';

const TemplateCard = ({ template, theme }) => {
    let { direction, type, firstColor, secondColor, name, author } = template;
    let parsedDirection = getParsedDirection(direction, type);
    let parsedStyle = "";

    if (type === "linear") {
        parsedStyle = "linear-gradient"
    } else {
        parsedStyle = direction === "center" ? "radial-gradient" : "-webkit-radial-gradient";
    }
    console.log(template);
    const background = `${parsedStyle}(${parsedDirection ? parsedDirection + ',' : ''}${firstColor}, ${secondColor})`;

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
