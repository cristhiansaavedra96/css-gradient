import React from 'react';
import './HomeGradient.css';
import { getParsedDirection } from '../../utils/parseCss';
import { useSelector } from 'react-redux';

const Gradient = () => {
  const {style, firstColor, secondColor, direction} = useSelector(state => state.gradientReducer);
  
  let parsedDirection = getParsedDirection(direction, style);
  let parsedStyle = "";

  if (style === "linear") {
    parsedStyle = "linear-gradient"
  } else {
    parsedStyle = direction==="center" ? "radial-gradient" : "-webkit-radial-gradient";
  }

  const background = `${parsedStyle}(${parsedDirection ? parsedDirection + ',' : ''}${firstColor}, ${secondColor})`;

  return <aside
    className="gradient"
    style={{
      "background": background,
    }}></aside>;
};

export default Gradient;
