import React from 'react';
import './Direction.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeDirection } from '../../../reducers/gradientReducer';
import buttons from './directionButtons';

const Direction = () => {

    const { style, direction } = useSelector(state => state.gradientReducer);
    const dispatch = useDispatch();

    const handleClick = (direction) => {
        dispatch(changeDirection(direction));
    }

    return (
        <section>
            <h2>Direction</h2>
            <div className='direction__container'>
                {buttons.map((button) =>
                    <button
                        type="button"
                        id={button.direction}
                        key={button.direction}
                        className={
                            `${style === "linear" && button.direction === "center" ? 'hidden__center' : ''} 
                                ${button.direction === direction ? 'active' : ''}`
                        }
                        onClick={(e) => handleClick(e.currentTarget.id)}
                    >
                        {button.icon}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Direction;
