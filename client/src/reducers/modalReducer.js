const initialState = {
    showSaveModal: false,
    showLoadModal: false
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@changeShowSaveModal':
            return state = { ...state, showSaveModal: !state.showSaveModal };
        case '@changeShowLoadModal':
            return state = { ...state, showLoadModal: !state.showLoadModal };
        default:
            return state;
    }
};

const changeShowSaveModal = () => {
    return {
        type: "@changeShowSaveModal"
    }
}

const changeShowLoadModal = () => {
    return {
        type: "@changeShowLoadModal"
    }
}

export {
    modalReducer,
    changeShowSaveModal,
    changeShowLoadModal
}

