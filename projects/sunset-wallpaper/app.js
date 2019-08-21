var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.send("Welcome home");
});

app.get("/:city", function(req, res) {
  var cities = {
    Barcelona: {
      lat: "41.3851",
      lng: "2.1734"
    },
    Taipei: {
      lat: "25.0330",
      lng: "121.5654"
    }
  };
  var city = req.params.city;
  var lat = cities[city].lat;
  var lng = cities[city].lng;
  var urlString = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;
  request(urlString, function(error, response, body) {
    var data = JSON.parse(body);
    res.send(data["results"]["sunset"]);
  });
});

app.get("*", function(req, res) {
  res.send("Why are you running");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
