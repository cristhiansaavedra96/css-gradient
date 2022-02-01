import { getParsedDirection } from "./parseCss";

export const parseBackground = (firstColor, secondColor, direction, style) => {
    let parsedDirection = getParsedDirection(direction, style);
    let parsedStyle = "";

    if (style === "linear") {
        parsedStyle = "linear-gradient"
    } else {
        parsedStyle = direction === "center" ? "radial-gradient" : "-webkit-radial-gradient";
    }
    return `${parsedStyle}(${parsedDirection ? parsedDirection + ',' : ''}${firstColor}, ${secondColor})`;
}