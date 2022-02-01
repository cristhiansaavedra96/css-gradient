import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeOutputFormat } from '../../../reducers/outputFormatReducer';

const OutputFormat = () => {
    const outputFormat = useSelector(state => state.outputFormatReducer);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(changeOutputFormat(e.currentTarget.id));
    }

    return (
        <section>
            <h2>Output Format</h2>
            <div>
                <input
                    type="button"
                    value="Hex"
                    id="hex"
                    className={outputFormat === 'hex' ? 'active' : ''}
                    onClick={(e) => handleClick(e)}
                />
                <input
                    type="button"
                    value="Rgba"
                    id="rgba"
                    className={outputFormat === 'rgba' ? 'active' : ''}
                    onClick={(e) => handleClick(e)}
                />
            </div>
        </section>
    );
};

export default OutputFormat;
