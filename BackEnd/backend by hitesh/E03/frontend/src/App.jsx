import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let data=0;
  useEffect(()=>{
    // fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    // fetch("http://localhost:5000/api/about")
    // fetch("/api/about")
    fetch("http://localhost:5000/api/about")
    .then((Response)=>{return Response.json()})
    .then((data)=>{
      console.log(data);
    })
  })
  return (
    <>
      
      <h1>hiii</h1>
    </>
  )
}

export default App
