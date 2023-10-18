import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full  h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"Green"}} onClick={()=>setColor("green")} >Green</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"Blue", color:"white"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"Pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"skyblue"}} onClick={()=>setColor("skyblue")}>Skyblue</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"turquoise"}} onClick={()=>setColor("turquoise")}>Turquoise</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"purple", color:"white"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className='px-3 py-1 rounded-full' style={{backgroundColor:"Black", color:"white"}} onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
