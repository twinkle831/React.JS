import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  const addValue = ()=> {
    console.log("clicked", Math.random(), counter);
    //counter+=1
    setCounter(counter+1)
  }

  const decreaseValue = ()=> {
    console.log("clicked", Math.random(), counter);
    //counter+=1
    if(counter >0){
    setCounter(counter-1) }
  }

 
  return (
    <>
     <h1>React - First Project</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value to {counter}</button>
     <br/>
     <button onClick={decreaseValue}>Decrease Value from {counter}</button>
     <p>footer : {counter} </p>
    </>
  )
}

export default App
