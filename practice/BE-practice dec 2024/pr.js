// console.log(module);
const { Module } = require("module");
const {add,sub}=require("./satyam.js");
// console.log(add);cl
console.log(module.children);
const {div}=require("./satyam.js");

let x=JSON.stringify(module.children);
console.log(JSON.parse(x));
// console.log(module.exports);
