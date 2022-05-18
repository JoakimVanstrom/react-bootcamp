import {useState} from "react";
import './styles/Form.css';

function FormComp() {
    const [name, setName] = useState("");
    const submit = (e)   => {
        e.preventDefault();
        console.log(name);
    }
    const clear = () => {
        setName("");
    }
  return (
    <div className="FormWrapper">
      <h1 className="FormTitle">FormComp</h1>
      <form className="FormTest" action="POST">
        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <button className="FormBtn" onClick={submit}>Send</button>
      </form>
      <h3 className="FormResult">{name}</h3>
        <button className="DiceBtn" onClick={clear}>Clear</button>
    </div>
  );
}

export default FormComp;
