import { useState } from 'react'; 
import './styles/InputDupComp.css';
function InputDupComp(){
    const [input, setInput] = useState(',,|,,');
    const clear = () => {
        setInput('');
    }
    return (
        <div className='InputComp'>
            <h1>{input}</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={clear} className='btn-counter'>Clear input</button>
        </div>
    );
}

export default InputDupComp;