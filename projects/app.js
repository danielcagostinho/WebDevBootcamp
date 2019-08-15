var links = {
  candyMuseum: {
    href: "./candy/candy.html",
    img: "./imgs/candy.PNG"
  },
  digitalSoundKit: {
    href: "./patatap/dist/circles.html",
    img: "./imgs/dsk.PNG"
  },
  todo: {
    href: "./todo/index.html",
    img: "./imgs/todo.PNG"
  },
  gallery: {
    href: "./bootstrap3/gallery/gallery.html",
    img: "./imgs/gallery.PNG"
  },
  colorGame: {
    href: "./colorGame/guessing-game.html",
    img: "./imgs/colorGame.PNG"
  },
  jquery: {
    href: "./jquery-demo/methods.html",
    img: "./imgs/jquery.PNG"
  }
};

for (link in links) {
  var idString = "#" + link + "-img";
  $(idString).attr("src", links[link].img);
}

$(".project-a").on("click", function() {
  var id = $(this).attr("id");
  $(this).attr("href", links[id].href);
});
