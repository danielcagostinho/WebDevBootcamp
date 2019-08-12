var colorButton = document.getElementById("color-button");
colorButton.addEventListener("click", toggleColor);
var body = document.getElementsByTagName("body")[0];
function toggleColor() {
  body.classList.toggle("colored");
}
