const getFormatCss = (firstColor, secondColor, style, direction) => {
    let formattedCss = "";
    let defaultDirection = getParsedDirection(direction, style);
    let webkitDirection = getParsedDirection(direction, 'other');

    formattedCss =
        `background: ${firstColor};
background: -webkit-linear-gradient(${webkitDirection ? webkitDirection + ',' : ''} ${firstColor}, ${secondColor});
background: -moz-linear-gradient(${webkitDirection ? webkitDirection + ',' : ''} ${firstColor}, ${secondColor});
background: linear-gradient(${defaultDirection ? defaultDirection + ',' : ''} ${firstColor}, ${secondColor});`

    return formattedCss;
}

const getParsedDirection = (direction, style) => {

    let parsedDirection = "";

    if (style === "linear") {
        switch (direction) {
            case "top-left": parsedDirection = "to right bottom"; break;
            case "top-mid": parsedDirection = ""; break;
            case "top-right": parsedDirection = "to left bottom"; break;
            case "right": parsedDirection = "to left"; break;
            case "bottom-right": parsedDirection = "to left top"; break;
            case "bottom-mid": parsedDirection = "to top"; break;
            case "bottom-left": parsedDirection = "to right top"; break;
            case "left": parsedDirection = "to right"; break;
            default: parsedDirection = "";
                break;
        }
    } else if (style === "radial") {
        switch (direction) {
            case "top-left": parsedDirection = "left top"; break;
            case "top-mid": parsedDirection = "center top"; break;
            case "top-right": parsedDirection = "right top"; break;
            case "right": parsedDirection = "right center"; break;
            case "center": parsedDirection = "at center center"; break;
            case "bottom-right": parsedDirection = "right bottom"; break;
            case "bottom-mid": parsedDirection = "center bottom"; break;
            case "bottom-left": parsedDirection = "left bottom"; break;
            case "left": parsedDirection = "left center"; break;
            default: parsedDirection = "";
                break;
        }
    } else {
        switch (direction) {
            case "top-left": parsedDirection = "top left"; break;
            case "top-mid": parsedDirection = "top"; break;
            case "top-right": parsedDirection = "top right"; break;
            case "right": parsedDirection = "right"; break;
            case "center": parsedDirection = "center"; break;
            case "bottom-right": parsedDirection = "bottom right"; break;
            case "bottom-mid": parsedDirection = "bottom"; break;
            case "bottom-left": parsedDirection = "bottom left"; break;
            case "left": parsedDirection = "left"; break;
            default: parsedDirection = "";
                break;
        }
    }
    return parsedDirection;
}


export { getFormatCss, getParsedDirection };