import React from "react";
import { dieSVGS } from "../assets";
import '../styles/scoreboard.css'


const Scoreboard = (props) => {

    let elements = props.hands.map(playHand => {
        let handValue = 0;
        return (
            <div>
                <div className="scores">
                    <h3>{playHand.name}'s</h3>
                    
                    {playHand.hand.map(die => {
                        if (die === null) {
                            return <div className="empty-score-element"></div>
                        } else {
                            if (die.value !== playHand.name) {
                                return <div className="empty-score-element"></div>
                            }
                            handValue += die.value;
                            return <img
                                src={dieSVGS[die.value - 1]}
                                className="scores-img"
                                alt={die.value}
                        
                            />
                        }
                    })}
                    <h2>{handValue}</h2>
                </div>
            </div>
        )
    })



    return (
        <div className="scoreboard">
            <h1>SCOREBOARD</h1>
            {elements}

        </div>
    )
}

export default Scoreboard;