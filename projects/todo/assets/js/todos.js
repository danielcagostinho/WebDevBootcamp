// Check off specific todos by clicking
$("#list").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("#list").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("#list").append(
      "<li><span><i class='material-icons md-30 red-icon'>cancel_presentation</i></span>" +
        todoText +
        "</li>"
    );
  }
});

$(".material-plus").click(function() {
  $('input[type="text"]').fadeToggle();
});
