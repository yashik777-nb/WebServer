const express = require("express");

const app = express();

// Domain = app.com
// pages -> app.com/about
// pages -> app.com/help

app.get("", (req, res) => {
  res.send("Express Tutorial");
});

app.get("/help", (req, res) => {
  res.send("Help Page Details");
});

app.get("/about", (req, res) => {
  res.send("Page Title");
});

app.get("/weather", (req, res) => {
  res.send("Weather Title");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
