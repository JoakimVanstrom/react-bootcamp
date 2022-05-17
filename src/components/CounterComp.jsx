import { useState } from 'react';
import './styles/Counter.css'

function CounterComp() {
    const [count, setCount] = useState(0);
  return (
    <div className='Counter'>
      <h1>You clicked {count} times</h1>
      <button className='btn-counter' onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CounterComp;
