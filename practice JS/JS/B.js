function red(yello,green){
    // setTimeout(() => {
        console.log("red");
    //    }, 3000);

    yello(green);
    
};

function  yellow(green ){
 console.log("yellow");
 setTimeout(() => {
    console.log("yellow");
   }, 1000);
 
}

function green(){
    console.log("green");
   }


  

  

   setTimeout(() => {
    console.log("green");
   }, 4000);