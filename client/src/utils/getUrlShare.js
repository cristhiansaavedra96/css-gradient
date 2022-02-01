import config from "../config";

const getUrlShare = (firstColor, secondColor, style, direction) => {
    let url = config.REACT_APP_URL;
    url += `?c1=${parseColor(firstColor)}&c2=${parseColor(secondColor)}&gt=${style}&gd=${direction}`;
    return url;
}

const parseColor = (color) => {
    return color.slice(1).toLowerCase();
}

export default getUrlShare;