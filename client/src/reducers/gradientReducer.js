import { getRandomColor } from "../utils/colorFunctions";

const initialState = {
    style: "linear",
    direction: "top-left",
    firstColor: getRandomColor(),
    secondColor: getRandomColor()
}

const gradientReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@gradient/changeStyle':
            return state = { ...state, style: action.payload };
        case '@gradient/changeDirection':
            return state = { ...state, direction: action.payload };
        case '@gradient/firstColor':
            return state = { ...state, firstColor: action.payload };
        case '@gradient/secondColor':
            return state = { ...state, secondColor: action.payload };
        case '@gradient/changeTemplate':
            return state = action.payload;
        default:
            return state;
    }
};

const changeStyle = (style) => {
    return {
        type: "@gradient/changeStyle",
        payload: style
    }
}

const changeDirection = (direction) => {
    return {
        type: "@gradient/changeDirection",
        payload: direction
    }
}

const changeFirstColor = (firstColor) => {
    return {
        type: "@gradient/firstColor",
        payload: firstColor
    }
}

const changeSecondColor = (secondColor) => {
    return {
        type: "@gradient/secondColor",
        payload: secondColor
    }
}

const changeTemplate = (template) => {
    if(template){
        return {
            type: "@gradient/changeTemplate",
            payload: {
                firstColor: template.firstColor,
                secondColor: template.secondColor,
                direction: template.direction,
                style: template.type,
            }
        }
    } else {
        return {
            type: "@gradient/default"
        }
    }
}

export {
    gradientReducer,
    changeStyle,
    changeDirection,
    changeFirstColor,
    changeSecondColor,
    changeTemplate
}
