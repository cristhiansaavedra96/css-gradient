import { useSelector, useDispatch } from 'react-redux';
import { changeStyle } from '../../../reducers/gradientReducer';

const Style = () => {

    const { style } = useSelector(state => state.gradientReducer);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(changeStyle(e.target.id));
    }

    return (
        <section>
            <h2>Style</h2>
            <div>
                <input
                    type="button"
                    value="Linear"
                    id="linear"
                    className={style === 'linear' ? 'active' : ''}
                    onClick={(e) => handleClick(e)} />
                <input
                    type="button"
                    value="Radial"
                    id="radial"
                    className={style === 'radial' ? 'active' : ''}
                    onClick={(e) => handleClick(e)} />
            </div>
        </section>
    );
};

export default Style;
