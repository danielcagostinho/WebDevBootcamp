var bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  express = require("express"),
  app = express();

mongoose.connect("mongodb://localhost/restful_blog_app");

//App config
app.set("view enginer", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Mongoo/Model Config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);
Blog.create({
  title: "Test Blog",
  image:
    "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F2f88c0a52697a42d3d0fb1e3276d2411.640x640x1.jpg",
  body: "HELLO THIS IS A BLOG POST"
});

// RESTFUL ROUTES
app.listen(3000, function() {
  console.log("Server is running.");
});
