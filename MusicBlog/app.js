// Requires
var bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  express = require("express"),
  BlogPost = require("./models/blogPost");
app = express();

var seedDB = require("./seeds");

// App config and DB set
var mongoURL =
  "mongodb+srv://blogadmin:13LnqF03dlpJXCF6@cluster0-96ptv.mongodb.net/music_blog?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useNewUrlParser: true });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

seedDB();

// Root Route
app.get("/", (req, res) => {
  res.render("landing");
});

// Index Route
app.get("/posts", (req, res) => {
  BlogPost.find({}, (err, foundBlogPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { blogPosts: foundBlogPosts });
    }
  });
});

// New Route
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// Create Route
app.post("/posts", (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var artist = req.body.artist;
  var review = req.body.review;
  var blogPost = { name: name, image: image, artist: artist, review: review };
  BlogPost.create(blogPost, (err, newBlogPost) => {
    if (err) {
      console.log("err");
      res.redirect("/posts");
    } else {
      res.redirect("/posts");
    }
  });
});

// Show Route
app.get("/posts/:id", (req, res) => {
  BlogPost.findById(req.params.id)
    .populate("comments")
    .exec((err, foundBlogPost) => {
      if (err) {
        console.log(err);
      } else {
        console.log(foundBlogPost);
        res.render("show", { blogPost: foundBlogPost });
      }
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
