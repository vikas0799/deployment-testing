// "use strict"
// console.log(this);



// JavaScript code demonstrating a simple object
// let school = {
//     name: 'Vivekananda School',
//     location: 'Delhi',
//     established: '1971',
//     displayInfo: function () {
//         console.log(`${school.name} was established 
//               in ${school.established} at ${school.location}`);
//               let x=()=>{
//                 console.log(this);
//               }
//               x();
//     }
// }
// school.displayInfo(); //school object due to global object is object

// let ans=school.displayInfo;
// console.log(ans);
// ans();     

// window object due to global object





// function x(){
//     console.log(this);
// }
// x();
// window.x();
// console.log(this);
// console.log(window);
// var a=90;
// function x(){
//     console.log(675);
// }
// x();
// window.x();



// *********************closers*****
// lexical scope binding
// console.log("hello");
// function x(){
//     let a=8;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function createCounter(initialValue) {
//     let count = initialValue; // Outer function variable
  
//     function increment() {
//       count++; // Inner function accessing outer function's variable
//       return count;
//     }
  
//     return increment; // Return the inner function (closure)
//   }
  
  // const counter1 = createCounter(0);
  // const counter2 = createCounter(10);
  
  // console.log(counter1()); // 1 (initial value + 1)
  // console.log(counter1()); // 2 (previous value + 1)
  // console.log(counter2()); // 11 (initial value + 1)
  // console.log(counter2()); // 12 (previous value + 1)
  
  // Each call to counter1 and counter2 creates separate closures
  // with their own reference to the outer function's count variable.
  


//   const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON);
// console.log(myObj);


const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(typeof(myJSON));