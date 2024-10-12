// add.js
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
  
//   common js
//   module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide,
//   };

//   module.exports = vikas; 

export default {add,subtract,multiply,divide} //import as a object
// export  {add,subtract,multiply,divide}  //import as object destructure













//  function vikas(){
//     console.log("hello");
    
//  }
//  export default vikas;  //modulejs

  