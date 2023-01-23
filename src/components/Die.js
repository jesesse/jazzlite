import React from "react";
import '../styles/die.css'
import { dieSVGS } from "../assets";
import { dieHeldSVGS } from "../assets";


const Die = ({die, holdTheDie}) => {

    
    return (
        <img
            className="die"
            src={die.isHeld ?
                dieHeldSVGS[die.value - 1] : dieSVGS[die.value - 1]}
            alt={die.value}
            id={die.id}
            onClick={() => holdTheDie(die.id)}
        />
    )
}

export default Die;