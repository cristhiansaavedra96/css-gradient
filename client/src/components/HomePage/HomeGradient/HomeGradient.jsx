import React from 'react';
import './HomeGradient.css';
import { useSelector } from 'react-redux';
import { parseBackground } from '../../../utils/parseBackground';

const Gradient = () => {
  const { style, firstColor, secondColor, direction } = useSelector(state => state.gradientReducer);
  const background = parseBackground(firstColor, secondColor, direction, style);

  return <aside
    className="gradient"
    style={{
      "background": background,
    }}></aside>;
};

export default Gradient;
