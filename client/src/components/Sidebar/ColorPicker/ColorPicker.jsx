import React from 'react';
import { getRandomColor } from '../../../utils/colorFunctions';
import './ColorPicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFirstColor, changeSecondColor } from '../../../reducers/gradientReducer';

const ColorPicker = () => {
    const { firstColor, secondColor } = useSelector(state => state.gradientReducer);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.target.id === 'firstColor'
            ? dispatch(changeFirstColor(e.target.value))
            : dispatch(changeSecondColor(e.target.value));
    }

    const handleRandomColor = () => {
        dispatch(changeFirstColor(getRandomColor()));
        dispatch(changeSecondColor(getRandomColor()));
    }

    return (
        <section>
            <h2>Colors</h2>
            <div className="colors__container">
                <div className="input__color__container">
                    <input
                        type="color"
                        id="firstColor"
                        value={firstColor}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="input__color__container">
                    <input
                        type="color"
                        id="secondColor"
                        value={secondColor}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <input type="button" id="randomColor" value="Random" onClick={handleRandomColor} />
            </div>
        </section>
    );
};

export default ColorPicker;
