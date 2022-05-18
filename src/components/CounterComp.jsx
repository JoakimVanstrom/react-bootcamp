import { useState } from 'react';
import './styles/Counter.css'

function CounterComp() {
    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1) }
    const decrement = () => { if(count !== 0){setCount(count - 1) } }
  return (
    <div className='Counter'>
      <h1 className='counterTitle'>You clicked {count} times</h1>
      <button className='btn-counter' onClick={increment}>Increment</button>
      <button className='btn-counter' onClick={decrement}>decrement</button>
    </div>
  );
}

export default CounterComp;
