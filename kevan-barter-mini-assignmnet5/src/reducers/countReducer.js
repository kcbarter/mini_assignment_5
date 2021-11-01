export default function countReducer(
    state = 0, action
){
    if(action.type === "currentBlackSquares"){
        if(action.clicked === 0){
            state += 1;
        }
        else{
            state -= 1;
        }
    }  
}