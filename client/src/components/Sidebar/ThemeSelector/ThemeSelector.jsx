import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../../reducers/themeReducer';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import './ThemeSelector.css';

const ThemeSelector = () => {
    const theme = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeTheme(
            theme === "light"
                ? "dark"
                : "light"));
    }

    return (
        <div className="button__container">
            <button
                type="button"
                id="btnChangeTheme"
                value="Cambiar tema"
                onClick={handleClick}>
                {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
            </button>
        </div>
    );
};

export default ThemeSelector;
