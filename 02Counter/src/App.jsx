import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   //let counter = 5;

  let[counter, setValue] = useState(0);

   let addValue = () =>{
   
   if(counter<=19){
    setValue(counter + 1);
   }
   }

   let resetValue = () =>{
    setValue(counter = 0)
   }

   let decreaseValue = () =>{
    if(counter>=-19){
      setValue(counter-1)
    }
    //setValue(counter<=-20)
   }

   
  return (
    <>
     <h1>Counter app with react</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={decreaseValue} >Decrease</button>
     <button onClick={resetValue}>Reset</button>
     <button onClick={addValue}>Increase</button>
    </>
  )
}

export default App
