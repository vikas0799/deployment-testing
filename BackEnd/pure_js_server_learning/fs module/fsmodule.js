const { ifError } = require('assert');
const fs=require('fs');
// console.log(fs);

console.log("hello 1");

 //sync->blocking operaions
//   let result=fs.readFileSync('vikas.txt',"utf8");
//   console.log(result);

//async ->non-blocking operartions
    fs.readFile("vikas.txt","utf8",(error,data)=>{
        if(error){
            throw error;
        }
        else{
            console.log(data);
            
        }
    })

  console.log("hello 2");
  