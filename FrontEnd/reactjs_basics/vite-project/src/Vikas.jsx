import React, { useState } from "react";

function Vikas() {
//   let cnt = 0;
//   const increase = () => {
//     cnt++;          onclicke method to invoked function increase
//     console.log(cnt);
//   };


let [cnt,setCnt]=useState(0);
  const increase=()=>{
    cnt++;
    console.log(cnt);
    if(cnt<20)
    setCnt(cnt+2)
  }

  return (
    <>
      <p>Lorem, ipsum {cnt} dolor.</p>
      <h1>Lorem ipsum{cnt} dolor sit.</h1>
      <div>
        <h1>Lorem ipsum{cnt} dolor sit.</h1>
      </div>

      <button onClick={increase}>click me</button>
    </>
  );
}

export default Vikas;
