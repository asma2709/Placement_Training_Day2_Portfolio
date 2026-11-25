import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to Vite</h1>
      <h1 style={{ color: "blue",
                   fontSize: "30px",
                   textAlign: "center",
      }}>Welcome to React</h1>
      <button className="bg-blue-500 text-white px-5 py-2 rounded-md m-1 cursor-pointer">submit</button>
       <button className="bg-blue-500 text-white px-5 py-2 rounded-md m-1 cursor-pointer">submit</button>
    </>

     )
   
}

export default App
