var express = require("express");
var router = express.Router();
var BlogPost = require("../models/blogPost");

// Index Route
router.get("/", (req, res) => {
  BlogPost.find({}, (err, foundBlogPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.render("blogPosts/index", { blogPosts: foundBlogPosts });
    }
  });
});

// New Route
router.get("/new", (req, res) => {
  res.render("blogPosts/new");
});

// Create Route
router.post("/", (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var artist = req.body.artist;
  var review = req.body.review;
  var blogPost = { name: name, image: image, artist: artist, review: review };
  BlogPost.create(blogPost, (err, newBlogPost) => {
    if (err) {
      console.log("err");
      res.redirect("/");
    } else {
      res.redirect("/posts");
    }
  });
});

// Show Route
router.get("/:id", (req, res) => {
  BlogPost.findById(req.params.id)
    .populate("comments")
    .exec((err, foundBlogPost) => {
      if (err) {
        console.log(err);
      } else {
        res.render("blogPosts/show", { blogPost: foundBlogPost });
      }
    });
});

module.exports = router;
