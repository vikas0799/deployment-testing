console.log("hello 1");

setTimeout(()=>{
    console.log("hello 2");
},3000)

setTimeout(()=>{
    console.log("hello 3");
},1000)

setTimeout(()=>{
    console.log("hello 4");
},2000)

console.log("hello 5");

queueMicrotask(()=>{
    console.log("hello 6");
    queueMicrotask(()=>{
        console.log("inside queue microtask");
        
    })
})


setTimeout(()=>{
    console.log("hello 7");
},0)