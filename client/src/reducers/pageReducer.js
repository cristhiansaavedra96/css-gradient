const initialState = 'home';

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@changeActivePage':
            return state = action.payload;
        default:
            return state;
    }
};

const changeActivePage = (activePage) => {
    return {
        type: "@changeActivePage",
        payload: activePage
    }
}

export {
    pageReducer,
    changeActivePage
}