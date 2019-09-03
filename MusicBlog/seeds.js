var mongoose = require("mongoose");
var Comment = require("./models/comment");
var BlogPost = require("./models/blogPost");

var data = [
  {
    name: "Swimming",
    artist: "Mac Miller",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Mac_Miller_-_Swimming.png/220px-Mac_Miller_-_Swimming.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod quo soluta quisquam voluptatem dicta ducimus est minus id? Nostrum esse fugiat commodi beatae assumenda voluptatibus nobis at, necessitatibus consequatur quo laudantium deleniti nesciunt aspernatur a dolores? Qui repudiandae nobis odio eos suscipit deserunt, fugit exercitationem hic. Error, tempore tenetur.",
    comments: []
  },
  {
    name: "2014 Forest Hills Drive",
    artist: "J. Cole",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/2014ForestHillsDrive.jpg/220px-2014ForestHillsDrive.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod quo soluta quisquam voluptatem dicta ducimus est minus id? Nostrum esse fugiat commodi beatae assumenda voluptatibus nobis at, necessitatibus consequatur quo laudantium deleniti nesciunt aspernatur a dolores? Qui repudiandae nobis odio eos suscipit deserunt, fugit exercitationem hic. Error, tempore tenetur.",
    comments: []
  },
  {
    name: "Saturation",
    artist: "BROCKHAMPTON",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Brockhampton_-_Saturation.png/220px-Brockhampton_-_Saturation.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod quo soluta quisquam voluptatem dicta ducimus est minus id? Nostrum esse fugiat commodi beatae assumenda voluptatibus nobis at, necessitatibus consequatur quo laudantium deleniti nesciunt aspernatur a dolores? Qui repudiandae nobis odio eos suscipit deserunt, fugit exercitationem hic. Error, tempore tenetur.",
    comments: []
  },
  {
    name: "Good Kid, M.A.A.D. City",
    artist: "Kendrick Lamar",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/KendrickGKMC.jpg/220px-KendrickGKMC.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod quo soluta quisquam voluptatem dicta ducimus est minus id? Nostrum esse fugiat commodi beatae assumenda voluptatibus nobis at, necessitatibus consequatur quo laudantium deleniti nesciunt aspernatur a dolores? Qui repudiandae nobis odio eos suscipit deserunt, fugit exercitationem hic. Error, tempore tenetur.",
    comments: []
  },
  {
    name: "Flower Boy",
    artist: "Tyler, the Creator",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png/220px-Tyler%2C_the_Creator_-_Flower_Boy.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod quo soluta quisquam voluptatem dicta ducimus est minus id? Nostrum esse fugiat commodi beatae assumenda voluptatibus nobis at, necessitatibus consequatur quo laudantium deleniti nesciunt aspernatur a dolores? Qui repudiandae nobis odio eos suscipit deserunt, fugit exercitationem hic. Error, tempore tenetur.",
    comments: []
  }
];

function seedDB() {
  BlogPost.deleteMany({}, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Removed Blog Post");
      data.forEach(seed => {
        BlogPost.create(seed, (err, newBlogPost) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Created New Blog Post");
            Comment.create(
              {
                text: "This sure is a comment",
                author: "Daniel"
              },
              (err, comment) => {
                if (err) {
                  console.log(err);
                } else {
                  newBlogPost.comments.push(comment);
                  newBlogPost.save();
                  console.log("Created new comment");
                }
              }
            );
          }
        });
      });
    }
  });
}

module.exports = seedDB;
