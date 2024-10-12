import React, { useEffect, useState } from "react";
import Products from "./Products";
// import './User.css'

function App() {
  // const[catagory,setCatagory]=useState("");
  //   const [product1, setProduct1] = useState({
  //     category: "",
  //     description: "",
  //     id: 0,
  //     image: "",
  //     price: 0,
  //   });
  const [arr, setArr] = useState([]);
  useEffect(()=>{
    console.log("re-rendering");
  })

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        // console.log(data);
        // setCatagory(data[0].category);
        // setProduct1(
        //     {
        //         category:data[0].catagory,
        //         description:data[0].description,
        //         id:data[0].id,
        //         image:data[0].image,
        //         price:data[0].price
        //     }
        // )
        setArr(data);
      })
      .catch((err) => {
        console.log("network erro");
      });
  }, []);
  
  const deleteItem = (index) => {
    // Create a copy of the array
    const newArray = [...arr];
    // Remove the element at the specified index
    newArray.splice(index, 1);
    // Update the state with the modified array
    setArr(newArray);
  }

  return (
    <>
      <Products arr={arr} deleteItem={deleteItem}/>
      {/* <h1>user componnet</h1>
      <div>
        {/* <h1>{catagory}</h1> */}
      {/* <h1>xyz</h1>
        <h1>{product1.id}</h1>
        <h1>{product1.category}</h1>
        <p>{product1.description}</p>
        <h1>{product1.price}</h1>
        <img src={product1.image} alt="" />
      </div> */}
    </>
  );
}

export default App;
