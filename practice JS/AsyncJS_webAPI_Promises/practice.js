setTimeout(() => {
    console.log("idhar");  //macrotask
  }, 0);

console.log("sanskar");  //sync

  const p = new Promise((resolve, reject) => {
    console.log("udhar");  //sync
    resolve("OK");
  });

p.then((res)=>{
    console.log(res); //micro
    
})
console.log("mote");  //sync

  queueMicrotask(()=>{
    console.log("heelo 2");  //micro
    
  })

  
  