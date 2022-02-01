import React, { useState } from 'react';
import { getFormatCss } from '../../../utils/parseCss';
import getUrlShare from '../../../utils/getUrlShare';
import { hexToRgba } from '../../../utils/colorFunctions';
import './ExportButtons.css';
import { useSelector } from 'react-redux';

const ExportButtons = () => {

    const { firstColor, secondColor, style, direction } = useSelector(state => state.gradientReducer);
    const theme = useSelector(state => state.themeReducer);
    const outputFormat = useSelector(state => state.outputFormatReducer);
    const [buttonCss, setButtonCss] = useState("Get CSS");

    const handleClick = (e) => {
        if (e.target.id === "get_css") {
            if (outputFormat === "rgba") {
                navigator.clipboard.writeText(getFormatCss(hexToRgba(firstColor), hexToRgba(secondColor), style, direction));
            } else {
                navigator.clipboard.writeText(getFormatCss(firstColor, secondColor, style, direction));
            }

            setButtonCss("Yey! Copied to clipboard.");
            setTimeout(
                () => setButtonCss("Get CSS"),
                2000
            );
        } else {
            navigator.clipboard.writeText(getUrlShare(firstColor, secondColor, style, direction));
        }
    }

    return (
        <section className={`export__buttons__container`}>
            <input
                type="button"
                value={buttonCss}
                className={`export__button__${theme}`}
                id="get_css"
                onClick={(e) => handleClick(e)}
            />
            <input
                type="button"
                value="Get Share Link"
                className={`export__button__${theme}`}
                id="get_share_link"
                onClick={(e) => handleClick(e)}
            />
        </section>
    );
};

export default ExportButtons;