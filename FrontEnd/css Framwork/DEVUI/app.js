const p1 = new Promise((resolve,reject)=>{
    setInterval(() => {
        resolve("Promise resolved 1");
    }, 5000);
});



const p2 = new Promise((resolve,reject)=>{
    setInterval(() => {
        resolve("Promsie resolved 2");
    },10000);
});

async function getD(){
    // Js Engine was waiting for promise to resolved
    console.log("YO");
    const val = await p1;
    console.log(val);
    let d = new Date();
    console.log("promise 1 time "+d); 

    const val2 = await p2;
    console.log(val2); 
    d = new Date();
    console.log("promise 2 time "+d); 
}
let d=new Date();
console.log("starting time "+d);
getD();