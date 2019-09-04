var express = require("express");
var router = express.Router({ mergeParams: true });
var BlogPost = require("../models/blogPost");
var Comment = require("../models/comment");

// New Comment Route
router.get("/new", isLoggedIn, (req, res) => {
  BlogPost.findById(req.params.id, (err, foundBlogPost) => {
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", { blogPost: foundBlogPost });
    }
  });
});

// Create Comment Route
router.post("/", isLoggedIn, (req, res) => {
  var text = req.body.comment.text;
  var author = req.user._id;
  var comment = { text: text, author: author };
  console.log(req.body.comment);
  BlogPost.findById(req.params.id, (err, foundBlogPost) => {
    if (err) {
      console.log(err);
      res.redirect("/posts");
    } else {
      Comment.create(req.body.comment, (err, newComment) => {
        if (err) {
          console.log(err);
        } else {
          foundBlogPost.comments.push(newComment);
          foundBlogPost.save();
          res.redirect("/posts/" + foundBlogPost._id);
        }
      });
    }
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
