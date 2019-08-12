var p1Button = document.getElementById("p1-button");
var p2Button = document.getElementById("p2-button");
var p1Display = document.getElementById("p1-score");
var p2Display = document.getElementById("p2-score");
var p1Score = 0;
var p2Score = 0;

var resetButton = document.getElementById("reset-button");
var numInput = document.getElementById("num-input");

var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.getElementById("winning-score");

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.textContent = p1Score;
      p1Display.classList.add("winner");
    } else {
      p1Display.textContent = p1Score;
    }
  }
});
p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.textContent = p2Score;
      p2Display.classList.add("winner");
    } else {
      p2Display.textContent = p2Score;
    }
  }
});
resetButton.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
});

numInput.addEventListener("change", function() {
  var newWinningScore = Number(this.value);
  winningScoreDisplay.textContent = newWinningScore;
  winningScore = newWinningScore;
});
