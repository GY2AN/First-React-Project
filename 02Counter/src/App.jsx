import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   //let counter = 5;

  let[counter, setValue] = useState(5);

   let addValue = () =>{
   setValue(counter + 1)
   }

   let resetValue = () =>{
    setValue(counter = 0)
   }

   let decreaseValue = () =>{
    setValue(counter-1)
   }

   
  return (
    <>
     <h1>Chai or rect</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={decreaseValue}>Decrease</button>
     <br />
     <button onClick={resetValue}>Reset</button>
     <br />
     <button onClick={addValue} >Increase</button>
    </>
  )
}

export default App
