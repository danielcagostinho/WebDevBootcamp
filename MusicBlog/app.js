// Requires
var LocalStrategy = require("passport-local"),
  BlogPost = require("./models/blogPost"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  Comment = require("./models/comment"),
  express = require("express"),
  seedDB = require("./seeds"),
  User = require("./models/user"),
  app = express();

// Requiring Routes
var commentRoutes = require("./routes/comments");
var blogPostRoutes = require("./routes/blogPosts");
var indexRoutes = require("./routes/index");

// App config and DB setup
var mongoURL =
  "mongodb+srv://blogadmin:13LnqF03dlpJXCF6@cluster0-96ptv.mongodb.net/music_blog?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//seedDB();

// PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "Daniel is so cool",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(indexRoutes);
app.use("/posts/:id/comments", commentRoutes);
app.use("/posts", blogPostRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
