import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function Card() {
    const x=useContext(MyContext);
    console.log(x);
   x.handleTextChange("madhuratipaterakhilam")
  return (
    <>
    <div>Card</div>
    <h1>{x.text}</h1>
    <h1>{x.a}</h1>

    </>
  )
}

export default Card