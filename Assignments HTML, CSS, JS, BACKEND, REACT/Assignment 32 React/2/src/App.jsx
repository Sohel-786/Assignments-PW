import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount(count + 1);
}

function handleSub(){
    if(count > 0){

        setCount(count - 1);    
    }
  }

  return (
    <div className='container'>
        <h1>{count}</h1>

        <div className='btn'>
            <button onClick={handleAdd}>Increment</button>
            <button onClick={handleSub}>Decrement</button>
        </div>
    </div>
  )
}

export default App
