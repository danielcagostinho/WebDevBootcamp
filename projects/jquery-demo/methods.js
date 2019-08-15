$("#text-button").click(function() {
  $("#display-text").text(".text(): " + $("#sentence").text());
});

$("#html-button").click(function() {
  $("#display-text").text(".html(): " + $("#sentence").html());
});

$("#css-button").click(function() {
  $("#display-text").text(".css(): Change the text to grow in size.");
  $(".fade-out").fadeOut(1000, function() {
    $(".fade-out").fadeIn(1000);
  });
});

var turn = true;
$("#attr-button").click(function() {
  if (turn) {
    $("#display-image").attr(
      "src",
      "https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_135_00.png"
    );
    turn = !turn;
  } else {
    $("#display-image").attr(
      "src",
      "https://img.pokemondb.net/sprites/x-y/normal/jolteon.png"
    );
    turn = !turn;
  }
});

$("#val-button").click(function() {
  var inputValue = $("input").val();
  $("#display-text").text(
    "inputValue(): " +
      (inputValue === "" ? "You did not enter an input." : inputValue)
  );
});

$("#add-class-button").click(function() {
  $("#sentence").addClass("text-fade");
  $(this).addClass("disabled");
  $("#remove-class-button").removeClass("disabled");
  $("#display-text").text("addClass(text-fade)");
});

$("#remove-class-button").click(function() {
  $("#sentence").removeClass("text-fade");
  $(this).addClass("disabled");
  $("#add-class-button").removeClass("disabled");
  $("#display-text").text("removeClass(text-fade)");
});

$("#toggle-class-button").click(function() {
  $("#sentence").toggleClass("text-fade");
  $("#display-text").text("toggleClass('text-class')");
});

$("#keypress-input").keypress(function(event) {
  if (event.which === 97) {
    console.log("you pressed a key");
    // Animate
    $("#display-text").text(
      ".keypress() - animate: Change the text to grow in size."
    );
    $("#sentence").addClass("animated");
    setTimeout(function() {
      $("#sentence").removeClass("animated");
    }, 2000);
  } else {
    console.log("you hit a different key");
  }
});

$("#sentence").on("mouseenter", function() {
  $("#sentence").css("opacity", "0.1");
});
$("#sentence").on("mouseleave", function() {
  $("#sentence").css("opacity", "1.0");
});
