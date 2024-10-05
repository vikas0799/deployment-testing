// // let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// // let new_cars = cars.slice(2, 3);
// // console.log("cars :", cars);
// // console.log("new_cars :", new_cars);


// // let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// // cars.splice(2, 2, 'ambassedor', 'BMW', 'Audi');
// // console.log(cars);


// // greet(); // Function call before declaration (works due to hoisting)

// // function greet() {
// //   console.log("Hi there!");
// // }


// // let obj={
// //     "name":"viks",
// //     age:34,
// //     display:()=>{
// //         console.log("hello");
// //     }
// // }
// // console.log(obj["display"]);
// // let arr=Object.keys(obj);
// // console.log(arr);


// // let arr=["abc","abd","bd","ad"];
// let arr=[111,4,8,9,222];
// // arr.sort((a,b,idx,arr)=>{
// //     console.log(a,b,idx,arr);
// //     return a-b;
// // });
// // console.log(arr);
// arr.forEach((e,idx,arr)=>{
//     console.log(e,idx,arr);
// },2)
// // let ans=arr.filter((Element,idx,arr)=>{
// //     console.log(Element,idx,arr,);
// //      if(Element%2==0)
// //         return true;
// //     else
// //     return false;
// // })
// // console.log(ans);
// // var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// // var petCounts = pets.reduce(function(obj, pet){
// //     if (!obj[pet]) {
// //         obj[pet] = 1;
// //     } else {
// //         obj[pet]++;
// //     }
// //     return obj;
// // }, {});

// // console.log(petCounts); 
const numbers = [1, 2, 3];

function doubler(number, index, array) {
  console.log("This inside doubler:", this);  // Initially, this is undefined
  return number * 2;
}

// Set a custom object as thisValue
const doublerContext = {multiplier: 3};

numbers.forEach(doubler, doublerContext);
