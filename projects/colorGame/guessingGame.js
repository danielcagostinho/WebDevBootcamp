var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  resetButton.addEventListener("click", function() {
    reset();
  });
  reset();
}

function reset() {
  resetButton.textContent = "NEW GAME"; // Reset Button Text
  messageDisplay.textContent = ""; // Reset Message Display
  h1.style.backgroundColor = "steelblue"; // Reset H1 Display
  colors = generateRandomColors(numSquares); // Generate New Colors
  pickedColor = pickColor(); // Pick a new random color from array
  colorDisplay.textContent = pickedColor; // Change display color
  for (var i = 0; i < squares.length; i++) {
    // change all colors of squares on page
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "CORRECT";
        resetButton.textContent = "PLAY AGAIN?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "INCORRECT";
      }
    });
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(size) {
  var randomColors = [];
  for (var i = 0; i < size; i++) {
    randomColors.push(randomColor());
  }
  return randomColors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
