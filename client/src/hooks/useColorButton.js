export const useColorButton = (color) => {

    let parsedColor = "";
    if (color === "azure") {
        parsedColor = "#bdffff";
    } else if (color === "monochrome") {
        parsedColor = "#dcdcdc";
    } else if (color === "pink") {
        parsedColor = "#fe7f9c";
    } else {
        parsedColor = color;
    }

    const style = {
        background: parsedColor
    }

    return { style };
}