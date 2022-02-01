const initialState = 'hex';

const outputFormatReducer = (state = initialState, action) => {
    if (action.type === "@changeOutputFormat") {
        return state = action.payload
    } else {
        return state;
    }
};

const changeOutputFormat = (outputFormat) => {
    return {
        type: "@changeOutputFormat",
        payload: outputFormat
    }
}

export {
    outputFormatReducer,
    changeOutputFormat
}