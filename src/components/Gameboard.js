import React from "react";
import Die from './Die';

const Gameboard = (props) => {

    const dieElements = props.dice.map(die => {
        return (<Die key={die.id} die={die} holdTheDie={props.holdTheDie}></Die>)
    })

    return (
        <div className="gameboard">
            {dieElements}
        </div>
    )
}

export default Gameboard;