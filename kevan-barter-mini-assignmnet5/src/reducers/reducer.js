import { combineReducers } from 'redux';
import squareReducer from './squareReducer';
import countReducer from './countReducer';

export default combineReducers({
    squares: squareReducer,
    blackSquareCount: countReducer,
})