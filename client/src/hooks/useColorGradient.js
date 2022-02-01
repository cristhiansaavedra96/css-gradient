import { orangeColors, yellowColors, blueColors, redColors, greenColors, purpleColors, skyblueColors, pinkColors, monochromeColors } from '../components/Gradients/ColorGradient/colors';
import { useDispatch } from 'react-redux';
import { changeActivePage } from '../reducers/pageReducer';
import { useEffect, useState } from 'react';

export const useColorGradient = (color) => {
    const [colorTitle, setColorTitle] = useState('#FFFFFF');
    const [colorsToUse, setColorsToUse] = useState([]);
    const [gradientsId, setGradientsId] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setColorTitle(color.charAt(0).toUpperCase() + color.slice(1));
        dispatch(changeActivePage('color-gradients'));
        switch (color) {
            case 'orange': setColorsToUse(orangeColors);
                break;
            case 'yellow': setColorsToUse(yellowColors);
                break;
            case 'blue': setColorsToUse(blueColors);
                break;
            case 'red': setColorsToUse(redColors);
                break;
            case 'green': setColorsToUse(greenColors);
                break;
            case 'purple': setColorsToUse(purpleColors);
                break;
            case 'azure': setColorsToUse(skyblueColors);
                break;
            case 'pink': setColorsToUse(pinkColors);
                break;
            case 'monochrome': setColorsToUse(monochromeColors);
                break;
            default: setColorsToUse(orangeColors);
                break;
        }
        setGradientsId([1, 2, 3, 4, 5, 6]);
    }, [color, dispatch]);

    return {
        colorTitle, colorsToUse, gradientsId
    }
}

