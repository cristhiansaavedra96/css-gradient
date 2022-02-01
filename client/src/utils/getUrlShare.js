function getUrlShare(firstColor, secondColor, style, direction){
    let url = "http://localhost:3000/";
    url += `?c1=${parseColor(firstColor)}&c2=${parseColor(secondColor)}&gt=${style}&gd=${direction}`;
    return url;
}

function parseColor(color){
    return color.slice(1).toLowerCase();
}

export default getUrlShare;