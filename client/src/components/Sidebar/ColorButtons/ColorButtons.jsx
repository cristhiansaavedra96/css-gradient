import React from 'react';
import ColorButton from './ColorButton';
import './ColorButtons.css';

const ColorButtons = () => {

    const colorButtons = ['red', 'orange', 'yellow', 'green', 'azure', 'blue', 'purple', 'pink', 'monochrome'];

    return (
        <div>
            <h2>Discover by Color</h2>
            <div className="color__buttons__container">
                {colorButtons.map((color) =>
                    <div key={color} className="color__button__container">
                        <ColorButton color={color} link={`/${color}-gradient-backgrounds`}>
                        </ColorButton>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ColorButtons;
