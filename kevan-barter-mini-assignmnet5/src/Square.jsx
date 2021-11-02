import React from "react";
import { useDispatch } from "react-redux";
import './square.css';


export default function Square(props){
    const count = props.count;

    let borderColor = 'white';
    if(count === 1){
        borderColor = 'black';
    }

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch(
            {
                type: 'boardClick',
                x: props.x,
                y: props.y,
            }
        );
        dispatch(
            {
                type: 'currentBlackSquares',
                clicked: props.count
            }
        );
    }} id="square" class={borderColor}></div>);
}