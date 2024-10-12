import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import UseStateObject from './UseStateObject'
import InputFieldComponent from './InputFieldComponent'

function App() {
  const [count, setcount] = useState(0)

  return (
    <>
      {/* <UseStateObject /> */}
      {/* <Card /> */}
     {/* <InputFieldComponent /> */}
     <Card />
    </>
  )
}

export default App
