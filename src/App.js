import React from 'react';
import './styles/main.css';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';


function App() {

  const [dice, setDice] = React.useState(createNewDice())
  const [rollCounter, setRollCounter] = React.useState(5)
  const [turnCounter, setTurnCounter] = React.useState(7)
  const [gameOver, setGameOver] = React.useState(false)
  const [hands, setHands] = React.useState(createEmptyHands())
  const [hand, setHand] = React.useState([])

  function createNewDice() {
    let newDice = []
    for (let i = 0; i < 5; i++){
      const newDie = {
        value: Math.ceil(Math.random() * 6),
        id: i,
        isHeld: false
      }
      newDice.push(newDie)
    }
    return newDice;
  }

  function createEmptyHands() {
    let emptyHands = []
    for (let i = 1; i < 7; i++) {
      const newHand = {
        name: i,
        hand: [null, null, null, null, null]
      }
      emptyHands.push(newHand)
    }
    return emptyHands;
  }


  function rollTheDice() {
    setDice(prevDice => prevDice.map(die => {
      if (!die.isHeld) die.value = Math.ceil(Math.random() * 6)
      return die;
    }))
    setRollCounter(prevRollCounter => prevRollCounter - 1)
  }

  function holdTheDie(id) {
    setDice(prevDice => prevDice.map(die => {
      if (die.id === id) die = {
        ...die,
        isHeld: !die.isHeld
      };
      return die;
    }))
  }

  function ChooseTheDice() {
    console.log(dice)
    setHands(prevHands => {
      let newHands = prevHands;
      newHands[7 - turnCounter].hand = dice;
      return newHands;
    })
    setTurnCounter(prevTurnCount => prevTurnCount - 1)
    setRollCounter(5)
    setDice(createNewDice()) 
    
  }

  return (
    <div className="container">
      <Scoreboard dice={dice} hands={hands} />
      <main>
        <h1>JAZZLITE</h1>
        <h1>TURN: {8 - turnCounter}</h1>
        <Gameboard dice={dice} holdTheDie={holdTheDie} />
        <div className="roll-counter">ROLLS REMAINING {rollCounter}</div>
        {rollCounter > 0 && <button onClick={rollTheDice}>ROLL</button>}
        {rollCounter === 0 && <button onClick={ChooseTheDice}>CHOOSE THE DICE</button>}
      </main>
    </div>
  )
}

export default App;
