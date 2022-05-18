import { useState } from "react";
import './styles/DiceRoller.css';

function RollTheDice(){
    const [dice, setDice] = useState(0);
    const rollTheDice = () => { setDice(Math.floor(Math.random() * 6) + 1) };
    return(
        <div className="DiceWrapper">
        <h1 className="DiceTitle">Dice Roller</h1>
        <p className="DiceResult">{dice}</p>
        <button className="DiceBtn" onClick={rollTheDice}>Roll the Dice</button>
        </div>
    )
}

export default RollTheDice;