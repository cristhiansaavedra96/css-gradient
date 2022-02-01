import { getRandomColorFromArray } from "../utils/colorFunctions";
import { parseHexColor } from "../utils/colorFunctions";

export const useGradientRectangle = (colorsToUse) => {
    let color1 = getRandomColorFromArray(colorsToUse);
    let color2 = getRandomColorFromArray(colorsToUse);
    let rectangleText = `${color1} — ${color2}`;
    let background = `linear-gradient(to right, ${color1}, ${color2})`;
    let url = `/?c1=${parseHexColor(color1)}&c2=${parseHexColor(color2)}`
    return { color1, color2, rectangleText, background, url };
}