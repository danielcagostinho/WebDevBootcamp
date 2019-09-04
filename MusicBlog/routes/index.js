var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", (req, res) => {
  res.render("landing");
});

// New User Route
router.get("/register", (req, res) => {
  res.render("register");
});

// Create User Route
router.post("/register", (req, res) => {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render("register");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/posts");
      });
    }
  });
});

// Show Login Route
router.get("/login", (req, res) => {
  res.render("login");
});

// Handling Login Logic
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: "/login"
  }),
  (req, res) => {
    res.send("login logic happens here");
  }
);

//Logout Route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/posts");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
