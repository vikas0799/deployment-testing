const http = require("http");
const mongodb = require("mongodb");
const cors = require('cors');   


const mongoUri ="mongodb+srv://vikaspatel07071999:latghat1234@cluster0.rc0vet2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// console.log(mongodb);



  const server = http.createServer((req, res) => {
  console.log("sending Data..");
   // CORS configuration (adjust origins as needed)
   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from all origins (replace with specific origins in production)
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers',   
  'Content-Type, Authorization');

  if (req.url === "/submit" && req.method === "OPTIONS") {
    res.writeHead(200, { "Content-Type": "text/plain" }); // Respond with a successful OPTIONS response
    res.end();
  } else 
  // if (req.url === "/submit" && req.method === "POST") {
  //   // ... your existing POST request handling logic ...
  // }
  if (req.url === "/submit" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    console.log("Received data", body); // After parsing data
    console.log("Connected to MongoDB client"); // After successful connection

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);
        const client = new mongodb.MongoClient(mongoUri);
        await client.connect();
        const database = client.db("yourDatabaseName");
        const collection = database.collection("formData");
        await collection.insertOne(data);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Data saved successfully" }));
      } catch (error) {
        console.error("Error saving data:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "An error occurred" }));
      } finally {
        await client.close();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});




server.listen(3000, () => {
  console.log("Server listening on port 3000");
});