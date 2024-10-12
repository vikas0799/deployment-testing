import React, { useEffect, useState } from 'react'

export default function LearnUseEffect() {
  const [counter, setCounter] = useState(0)
  let [card,setcard]=useState([])
  let [url, seturl] = useState('http://localhost:3004/products')

  // fetch('http://localhost:3004/products')
  // .then((res) =>res.json())
  // .then((data) =>{
  // card=data
  // console.log(card)
  // })

useEffect(()=>{
  fetch(url)
  .then((res) =>{
    if(!res.ok){
      throw new Error('No response');
    }
    else{
      return res.json();
    }
  })
  .then((data) =>{ 
    console.log('hi');
    setcard(data)
  })
  .catch((error)=>{
    console.log('Error occurred'+error)
  })
},[url])

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button className='btn btn-danger' onClick={() => setCounter(counter + 1)}>Inc</button>
      <h1>printing JSON File</h1>
      <button className='bg-warning ms-5 ' onClick={()=>seturl('http://localhost:3004/products/?instock=true')}>In stock</button>
      <button className='bg-danger'>Out Of Stock</button>
      <div className='bg-success text-white p-3 ' >
        {card.map((c) => <li key={c.id}> {c.id}  {c.pname} {c.price} {c.instock} <button className={JSON.parse(c.instock) ?'bg-warning w-25':'bg-danger w-25'} >  {JSON.parse(c.instock) ? 'InStock' : 'outofstock'}  </button> </li>)}
      </div>
      

   
    </div>
  )
}