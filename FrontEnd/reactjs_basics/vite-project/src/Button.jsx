import React, { useState } from "react";
import "./Button.css";
const Button = ( mymark) => {
  console.log(mymark);
  const [state, setState] = useState("change");
  
  return (
    <>
    <p>mer naam h {mymark.userinfo.name} hasanpur</p>
      {/* <p className={state}> value = {mymark.mark}in button componet</p> */}
      {/* <button onClick={()=>setState("final")}>click me</button> */}
    </>
  );
};

export default Button;
