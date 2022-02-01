import { createStore, combineReducers } from 'redux';
import { themeReducer } from './reducers/themeReducer';
import { gradientReducer } from './reducers/gradientReducer';
import { outputFormatReducer } from './reducers/outputFormatReducer';
import { modalReducer } from './reducers/modalReducer';
import { pageReducer } from './reducers/pageReducer';

const store = createStore(combineReducers({
    themeReducer,
    gradientReducer,
    outputFormatReducer,
    modalReducer,
    pageReducer,
}));

export default store;