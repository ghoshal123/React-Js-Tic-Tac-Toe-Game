import React, { useState } from 'react'
import Board from "./Board";
import "./Player.css";
const Player = () => {
    const [player, setPlayer] = useState({ firstplayer: "", secondplayer: "" });
    const [start, setStart] = useState(false);

    function startGame() {
        setStart(true);
    }
    return (
        <div className="App">
            {start ? (
                <Board val={player} />
            ) : (
                <div>
                    <h1 style={{ textAlign: "center" }}>Tic Tac Toe Game</h1>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-25">
                                    <label><b>Player 1</b></label>
                                </div>
                                <div className="col-75">
                                    <input type="text" name="firstplayer" value={player.firstplayer} onChange={(e) => setPlayer({ ...player, [e.target.name]: e.target.value })
                                    }
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-25">
                                    <label> <b>Player 2</b></label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="text" name="secondplayer" value={player.secondplayer} onChange={(e) => setPlayer({ ...player, [e.target.name]: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div class="row">
                                <button onClick={startGame}> Start Game</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Player