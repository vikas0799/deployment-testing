import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  // const [cnt,setCnt]=useState(0);
  // const [cnt1,setCnt1]=useState(0);

  //  useEffect(()=>{
  //   console.log("hello");
  //  })

  //  useEffect(()=>{
  //   console.log("patel");
  //  },[cnt,cnt1])

  return (
    <>
      <Card />
      {/*        
       <h1>welocmeto chitkara</h1>
       <h1>chitkar univesrty</h1>
       <button onClick={()=>{setCnt(cnt+1)}}>click me cnt</button>
       <button onClick={()=>{setCnt1(cnt1+1)}}>click me cnt1</button> */}
    </>
  );
}

export default App;
