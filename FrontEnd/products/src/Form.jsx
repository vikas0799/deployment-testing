import React, { useState } from "react";

function Form(props) {
     
    
const[name,setName]=useState("");
const[age,setAge]=useState(0);
const[imgurl,setImg]=useState("");


  function formhandler(e){
    e.preventDefault();
    // console.log(name,age,imgurl);
    let obj={
        name:name,
        image:imgurl,
        age:age
    }
    console.log(obj);
    props.fun(obj);
    setAge(0);
    setImg("");
    setName("");
  }
        

  return (
    <>
      <h3>Enter profile details</h3>
      <form  onSubmit={formhandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name}/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="" id="" onChange={(e)=>{setAge(e.target.value)}} value={age} />
        </div>

        <div>
          <label htmlFor="imgurl">ImgUrl</label>
          <input type="text" onChange={(e)=>{setImg(e.target.value)}}  value={imgurl}/>
        </div>

        <button>Add data</button>
      </form>
    </>
  );
}

export default Form;
