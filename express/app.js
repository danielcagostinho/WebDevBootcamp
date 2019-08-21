var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  var animals = {
    pig: {
      speak: "Oink"
    },
    cow: {
      speak: "Moo"
    },
    dog: {
      speak: "Woof Woof"
    }
  };
  var animal = req.params.animal;
  if (animals.hasOwnProperty(animal)) {
    var animalSpeak = animals[animal]["speak"];
    res.send("The " + animal + " says '" + animalSpeak + "'");
  } else {
    res.send("Fuck, we lost one of the animals.");
  }
});

app.get("/repeat/:word/:number", function(req, res) {
  var word = req.params.word;
  var n = Number(req.params.number);
  var str = "";
  for (var i = 0; i < n; i++) {
    str += word + " ";
  }
  res.send(str);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
