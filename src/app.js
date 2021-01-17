const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Deifne paths for express config
// Serve the HTML Content folder
const publicDirectoryFolder = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

// Setup handle bars engine, views and partials
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialspath);

// Set up static directory to server
app.use(express.static(publicDirectoryFolder));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Yash",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Yash",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "Help Yourself",
    title: "Help",
    name: "Yash",
  });
});

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
