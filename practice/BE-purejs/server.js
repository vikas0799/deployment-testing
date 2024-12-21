const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const server = http.createServer((req, res) => {
  let { method } = req;
  if (method == "GET") {
    if (req.url === "/") {
      fs.readFile("form.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Server Error");
        } else {
          // res.writeHead(200, { "Content-Type": "text/html" });
          // console.log(data);
          // console.log(typeof data);
          // let address = {
          //   name: "vikas patel",
          //   age: 20,
          // };
          // let objdata = JSON.stringify(address);
          // update = JSON.parse(objdata);
          // console.log(objdata);
          // console.log(typeof objdata);
          let user=fs.readFileSync("User.json","utf-8");
          console.log(user);
          
          res.end(data);
        }
      });
    }
    //   } else if (req.url === '/register') {
    //     // Handle registration form submission
    //     // ... (see below)
    //   } else if (req.url === '/users') {
    //     // Display registered users
    //     // ... (see below)
    //   }
    else {
      //error handlings
      console.log(req.url);

      res.writeHead(404);
      res.end("Not Found");
    }
  } else {
    //if method is post and // Store the user data in a file or database
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      //  console.log(chunk);
    });
    req.on("end", () => {
      // console.log(req.headers);
      // console.log(req.url);

      //   const [name, email, password] = body.split('&').map(pair => pair.split('=')[1]);
      //   console.log(name);
      //   console.log(email);
      //   console.log(body);

      // fs.readFile("User.json","utf-8",(error,data)=>{
      //     //jab pura data read ho jayega tab callback call hoga , its a promise, next code execute ho jayega

      // })
      let readdata = fs.readFileSync("User.json", "utf-8");
      console.log(readdata);
      if (!readdata) {
        fs.writeFileSync("User.json", JSON.stringify([]));
      } else {
        let jsonData = JSON.parse(readdata);
        let users = [...jsonData];
        console.log(users);

        let convertedbody = qs.decode(body);
        users.push(convertedbody);
        // console.log(convertedbody);
        fs.writeFile("User.json", JSON.stringify(users), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("userdata inserted succefuly");
          }
        });
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Registration successful!");
    });
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
