const defaultState = [
    [0, 0],
    [0, 0]
]

export default function squareReducer(
    state = defaultState, action
){
    if(action.type === 'boardClick'){
        const value = state[action.x][action.y];
        if(value === 0){
            state[action.x][action.y] = 1;
        }
        else{
            state[action.x][action.y] = 0
        }
        return [...state]
    }
    return state;
}