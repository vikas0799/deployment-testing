const http =require("http");


function parseData(req){
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newTodo = JSON.parse(body);
      return newTodo;
    });
}
const server = http.createServer((req,res)=>{
// get post patch put delelte
console.log(req);
const {headers,method}  = req;
console.log(method);
//read
if(method === "GET") {
    res.statusCode= 500;
    res.write("<h1>hello</h1>");
    res.write("<p>how are you</p>");
    res.end();
}

// create 
if(method==="POST"){
    
   parseData(req);
}
//upadte
if(method==="PUT"){

}
//delete
if(method==="DELETE"){

}
});

server.listen(3030,(err)=>{
console.log(err?err:"server is running on port 3030");
});