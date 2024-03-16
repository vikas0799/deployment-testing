// console.log("helo");
// console.log("helo2");
// setTimeout(() => {
//     console.log("hello");
// }, 3000);
// console.log("hello3");

// // sync->run linr by line
// // async -> do not wait(js)


// ram(function(result1) {
//     vikas(result1, function(result2) {
//         samarth(result2, function(result3) {
//             // Do something with result3
//             console.log(result3);
//         });
//     });
// });
// ram(3);

function add(a,b){
console.log(a,b);
a++;
add(a,b);
}

function x2(){
    console.log("hello");
}
add(2,x2);