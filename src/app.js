const path = require("path");
const express = require("express");

const app = express();

// Serve the HTML Content folder
const publicDirectoryFolder = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryFolder));

// Domain = app.com
// pages -> app.com/about
// pages -> app.com/help

// app.get("", (req, res) => {
//   res.send(`<h1>Weather</h1>`);
// });

// app.get("/help", (req, res) => {
//   res.send([{ name: "Yash" }, { name: "Sai" }]);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Title</h1>");
// });

app.get("/weather", (req, res) => {
  res.send({
    weather: "Hyderabad ",
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
