import './App.css'
import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <div className="main">
    <button onClick={()=>counter===0 ? setCounter(0) : setCounter(counter-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)} >+</button>
      
      </div>
    </>
  )
}

export default App
