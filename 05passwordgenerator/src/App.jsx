import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  const [length, setlength] = useState(6)
  const [character, setcharacter] = useState(false)
  const [Number, setNumber] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(character) str += "!@#$%^&*()_+}{[]><?/;:"
    if(Number) str += "1234567890"
    for(let i =1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,character, Number, setPassword])

  const copyPasswordToClipboard = useCallback(()=> {
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0,999);
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()},[length,character, Number, passwordgenerator]
  )


  return ( 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Passowrd Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex item-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked={Number} id='numberInput' onChange={() => {setNumber((prev) => !prev)}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked ={character} id='characterInput' onChange={() => {setcharacter((prev) => !prev)}} />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
