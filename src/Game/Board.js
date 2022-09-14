import React, { useState } from 'react'
import Sqaure from './Sqaure'

const Board = (props) => {
   // console.log(props.val);

    const { firstplayer, secondplayer } = props.val;
    // console.log(firstplayer);
    // console.log(secondplayer);

    const [state, setState] = useState(Array(9).fill(null));
    const [myTurn, setMyTurn] = useState(true);

    const myWinnerLogic = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let x of winner) {
            const [a, b, c] = x;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };


    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = myTurn ? "O" : "X";
        setState(copyState);
        setMyTurn(!myTurn);

    };

    const handleReset = () => {
        setState(Array(9).fill(null));

    }


    const myWinner = myWinnerLogic();

    return (
        <div className="board-container">
            {
                myWinner ?
                    (
                        <div><h1 style={{ textAlign: "center" }}>Hurray!!{myWinner==="O" ? firstplayer:secondplayer },You Won the Game......</h1>
                            <button style={{ margin: "auto", display: "block",width:"50%" }} onClick={handleReset}><b>Play Again</b></button><br /><br />
                            
                        </div>

                    ) :
                    (
                        <div>
                            <h1 style={{ textAlign: "center" }}>Tic Tac Toe</h1>
                            <h4 style={{ textAlign: "center" }}>{myTurn ? firstplayer : secondplayer} your Chance!!!!!!!!!!!!</h4><br />
                            <div className='row-container'>
                                <Sqaure value={state[0]} onClick={() => handleClick(0)} />
                                <Sqaure value={state[1]} onClick={() => handleClick(1)} />
                                <Sqaure value={state[2]} onClick={() => handleClick(2)} />
                            </div>
                            <div className='row-container'>
                                <Sqaure value={state[3]} onClick={() => handleClick(3)} />
                                <Sqaure value={state[4]} onClick={() => handleClick(4)} />
                                <Sqaure value={state[5]} onClick={() => handleClick(5)} />
                            </div>
                            <div className='row-container'>
                                <Sqaure value={state[6]} onClick={() => handleClick(6)} />
                                <Sqaure value={state[7]} onClick={() => handleClick(7)} />
                                <Sqaure value={state[8]} onClick={() => handleClick(8)} />
                            </div>

                        </div>

                    )
            }
        </div>
    )
}

export default Board

