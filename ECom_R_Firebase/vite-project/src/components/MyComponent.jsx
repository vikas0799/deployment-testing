import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

function MyComponent() {
  let x=useContext(MyContext);
  console.log("myContext"+x);
  return (
    <div>MyComponent</div>
  )
}

export default MyComponent