// async function example
console.log("hello 1");

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}
console.log("hello 2");

let x=f(); 
x.then((ans)=>{
    console.log(ans);
    
})
console.log(x);
console.log("hello 3");


