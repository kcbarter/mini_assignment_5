import Square   from "./Square";
import { useState } from "react";
import './board.css';
import { useSelector } from "react-redux";

export default function Board(){
    const blackSquareCount = useSelector((state) => state.blackSquareCount)
    const boardState = useSelector((state) => state.squares)

    const boardComponent = [];

    for(let i = 0; i < boardState.length; i++){
        let row = boardState[i];
        for(let j = 0; j < row.length; j++){
            boardComponent.push(<Square count={boardState[i][j]} x={i} y={j} />)
        }
    }

    return(
        <div class="container">
            <h1>Count: {blackSquareCount}</h1>
            <div id="board">
                {boardComponent}
            </div>
        </div>
    )
}