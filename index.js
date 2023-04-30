const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.get("/data", (req, res) => {
  res.send(data);
});
app.get("/booking/:id", (req, res) => {
  const id = req.params.id;
  const findData = data.find((fd) => fd.id === +id);
  res.send(findData);
});
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
