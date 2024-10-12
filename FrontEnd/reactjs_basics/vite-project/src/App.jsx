import { useState } from "react";
import reactLogo from "./assets/react.svg";
import sunflower from "./assets/sunflower.jpg";

import viteLogo from "/vite.svg";
import Properties from "./Properties";
import Propes2 from "./Propes2";
import QRCode from "react-qr-code";
import React from "react";
import ReactDOM from "react-dom";
// import "./App.css";
// import Button from "./Button"
// import Vikas from "./Vikas";

// import Card from './Card'
// import Button from './Button'
//  function Vikas(props){
//   const a=90;
//   return (
//     <>
//     <p>Lorem ipsum {a} dollor{props.userinfo.vill} sit.</p>
//     </>
//   )
//  }

function App() {
  // const [count, setCount] = useState(0);
  // const user={
  //   name:"vikas patel chitkara",
  //   id:875,
  //   vill:"azamagrh"
  // };
  // const arr=["vikas patel","rohit kumar","jasjeet","japneet","japneet"];
  const arr=[
    {
      name:"vikas patel",
      // image:"https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
      image:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
      age:26
    },
    {
      name:"rohit patel",
      image:"https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
      age:21
    },
    {
      name:"akash patel",
      image:"https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png",
      age:18
    }
  ]
  
  return (
    <>
    <h1>welcome to qr code</h1>
    {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
  <QRCode
    // size={256}
    // style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    // // value={value}
    // viewBox={`0 0 256 256`}
  />
</div> */}
{/* <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={"vikas patel"}
    viewBox={`0 0 256 256`}
  /> */}

<div style={{ background: 'white', padding: '16px' }}>
  <QRCode value="xxx.com" />
</div>
    {/* <Propes2  data={arr}/> */}
    {/* <Properties /> */}
    {/* <Vikas /> */}

    {/* <Vikas  userinfo={user}/> */}
    {/* <img src="./assets/react.svg" alt="" /> */}
    {/* <img src="./assets/sunflower.jpg" alt="" /> */}
    {/* <img src={sunflower} alt="" /> */}
    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg" alt="" /> */}
    {/* <p>vikas patel</p> */}
      {/* // <Button mark="vikas" /> */}
      {/* <Button userinfo={"xyz"} /> */}
      {/* <Button userinfo={user} /> */}

      {/* <p>my marks is = {name} in science</p> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to  test vikas patel HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <p>starting react and vite project</p>
      </div> */}
      
    </>
  );
}

export default App;
