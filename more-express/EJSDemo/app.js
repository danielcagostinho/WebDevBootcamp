var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("/eat/:bites", function(req, res) {
  var bites = req.params.bites;
  res.render("eat.ejs", { bites: bites });
});

app.get("/posts", function(req, res) {
  var posts = [
    { title: "post1", author: "HotDog" },
    { title: "post2", author: "Borgars" },
    { title: "post3", author: "HaM" }
  ];
  res.render("posts.ejs", { posts: posts });
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
