const initialState = 'light'

const themeReducer = (state = initialState, action) => {
    if (action.type === "@changeTheme") {
        return state = action.payload
    } else {
        return state;
    }
};

const changeTheme = (theme) => {
    return {
        type: "@changeTheme",
        payload: theme
    }
}

export {
    themeReducer,
    changeTheme
}