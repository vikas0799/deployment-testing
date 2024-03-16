// console.log("Hello ");

// let arr=[243,34,12,5,"Chitkara",true];
// let n=arr.length;
// for(let i=0;i<n;i++){
//     console.log(arr[i]);
// }
// arr.forEach(element => {
//     console.log(element);
// });
// console.log(arr[2]);
// console.log(arr);
// console.log(typeof(arr));
// arr.push("dipanshu");
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift("dipanshu");
// console.log(arr);
// arr.shift();
// console.log(arr);

// delete arr[2];


// let vikas={
//   name:"Vikas Patel",
//   roll:056,
//   id:"patel@gmail.com",
//   dist:"Azamgarh"
// };
// console.log(vikas);
// console.log(vikas["id"]);



// let arr=[243,34,12,5,65,-87];
// console.log(arr);
// arr.sort();  //according to strings
// console.log(arr);


// let arr=[243,34,12,5,65,-87,"chitkara",true];
// console.log(arr);

// arr.reverse();
// console.log(arr);

// let brr=arr.slice(2,5);
// arr.splice(2,3,"vikas","dipanshu");
// arr.splice(2,0,"vikas","dipanshu");
// console.log(arr);

// let arr=[243,34,12,5,65,12,"chitkara",12];

// let idx=arr.indexOf(34);
// let idx=arr.indexOf(12);
// let idx=arr.lastIndexOf(12);

// // console.log(idx);

// let str="My name is john";
// // console.log(str);
// console.log(str.charAt(1));
// // ***************************************
// let arr=[1,4,3];
// // let brr=[1,4,3];
// let brr=arr;
// console.log(arr==brr);

// ****************************************
// console.log("G22");

// let str="ChiTKaRa UniVerSiTY";
// console.log(str[3]);
// console.log(str.charAt(3));
// console.log(str);
// let output=str.toUpperCase();
// console.log(output);
// let lower=str.toLowerCase();
// console.log(lower);


// let str="FAham Khan chitkara";
//     let ans= str.slice(2,7);
//     console.log(ans);

// let x=9;
// console.log(Math.sqrt(x));

// let x=90,y=78,z=67,w=890;
// console.log(Math.max(x,y,z,w));
// console.log(Math.min(x,y,z,w));


// let x=-89;
// console.log(Math.abs(x));

// let x=9.45;
// console.log(Math.round(x));

// let obj={
//     name:"vikas",
//     roll:067,
//     dist:"Azamgarh",
//     d:function (){
//         console.log("Hello G22");
//     },
//     faham:{
//         name:"Faham Khan",
//         roll:309,
//         dist:"patiyala"
//     },
//     pre:true
// };
// console.log(obj);

// let arr=Object.keys(obj);
// console.log(arr);
// let arr=Object.values(obj);
// console.log(arr);


// let entry=Object.entries(obj);
// console.log(entry);
// window.alert("Thank You for submit form");
// **************************




// console.log("Helo G22");

// function add(a,b){
//     console.log("Sum=");
//     console.log(a+b);
// }

// add(2,5);

// anonymus function
// let add=function (a,b){
//     console.log("Sum=");
//     console.log(a+b);
// }
// add(5,4);

// arrow function
// let add=(a,b)=>{
//     console.log("Sum=");
//         console.log(a+b);
// });
// add(5,3);


// HOF=>
// function Fun(){
//     function innerfun(){
//         console.log("innerfunction in console");
//     }
//     return innerfun;
//     // return 9;
// }
// let x=Fun();
// console.log(x);
// x();

// function higherOrderFunction(callback) {
//     console.log("Executing the higher-order function");
//     callback(); // calling the callback function
//   }
  
//   function callbackFunction() {
//     console.log("Executing the callback function");
//   }
  
//   // Passing callbackFunction as an argument to higherOrderFunction
//   higherOrderFunction(callbackFunction);

const name = 'John';
const age = 30;
// Using template literals with backticks
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);




function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// let arr=[3,2,5,4];
// arr.sort();
// arr.sort(function(a,b){return a-b});
// console.log(arr);

// let arr=[3,6,4,2,7,4,44,33,65];
// function double(x){
//    return  x*2;
// }
// let output=arr.map(double);
// let output=arr.map(function (x){
//     return x*2;
// });
// let output=arr.map((x)=>{
//     return x*2;
// })
// console.log(output);
// let arr=[3,6,4,2,7,4,44,33,65];
// function isEven(x){
//     return x%2==0;
// }
// let output=arr.filter(isEven);
// console.log(output);

let arr=[3,6,4];
function sum(acc,curr){
    acc=acc+curr;
    return acc;
}
let output=arr.reduce(sum,0);
console.log(output);


// oops concepts in js