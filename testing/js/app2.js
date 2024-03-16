

console.log(11=="11");  //true
console.log(11==="11"); //false



const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array1;

console.log(array1 === array2); // Output: false (Different objects)
console.log(array1 === array3); // Output: true (Same object)

