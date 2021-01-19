const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoCode = require("./utils/geoCode.js");
const forecast = require("./utils/forecast.js");
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

// Set up static and dynamic directory to server, matches happen in sequence
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

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Did not find address query parameter",
    });
  }
  geoCode(
    req.query.address,
    (geoError, { latitude, longitude, location } = {}) => {
      if (geoError) return { error: geoError };

      forecast({ latitude, longitude }, (error, forecastData) => {
        if (error) return { error };

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search query",
    });
  }

  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Page Error",
    name: "Yash",
    errorMmessage: "Help Article Not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Page Error",
    name: "Yash",
    errorMmessage: "Page Not Found",
  });
});

// Start the server with https you need sercer certificates
var httpsServer = app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
