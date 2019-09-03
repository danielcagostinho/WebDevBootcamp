var mongoose = require("mongoose");

var blogPostSchema = new mongoose.Schema({
  name: String,
  image: String,
  artist: String,
  review: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = BlogPost = mongoose.model("BlogPost", blogPostSchema);
