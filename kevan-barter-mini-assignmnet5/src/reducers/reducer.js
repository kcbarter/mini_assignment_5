import { combineReducers } from 'redux';
import squareReducer from './squareReducer';
import countReducer from './countReducer';

export default combineReducers({
    square: squareReducer,
    countReducer: countReducer,
})