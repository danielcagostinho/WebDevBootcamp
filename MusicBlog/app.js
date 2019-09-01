var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var blogPosts = [
  {
    name: "Time Out",
    image:
      "https://i.pinimg.com/originals/0e/65/f3/0e65f359b7e82f2d8343c68f1dd57ceb.jpg"
  },
  {
    name: "Blue Train",
    image:
      "https://musiczone.ie/wp-content/uploads/2014/10/p_9_7_9_979-thickbox_default-john-coltrane-blue-train.jpg"
  },
  {
    name: "Kind of Blue",
    image:
      "https://petesmusic.co.uk/image/data/R-379868-1345728320-4447.jpeg.jpg"
  }
];

// Root Route
app.get("/", (req, res) => {
  res.render("landing");
});

// Index Route
app.get("/posts", (req, res) => {
  res.render("index", { blogPosts: blogPosts });
});

// New Route
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// Create Route
app.post("/posts", (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var image = req.body.image;
  blogPosts.push({ name: name, image: image });
  res.redirect("/posts");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
