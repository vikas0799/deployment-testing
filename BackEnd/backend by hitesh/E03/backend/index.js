import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

const port = 5000;
const mydata = {
  name: "vikas patel",
  age: 25,
};

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api", (req, res) => {
  res.send("hello api");
});

app.get("/api/about", (req, res) => {
  //   console.log(req.rawHeaders);
  res.json(mydata);
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found this is universal route");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
