setTimeout(function() {
  var h1 = document.querySelector("h1");
  h1.style.color = "yellow";
  h1.style.border = "5px solid pink";
  var paragraph = document.querySelector("p");
  paragraph.classList.add("big");
  h1.textContent = "I LOVE CORGIS";
  paragraph.innerHTML = "Corgi mixes are super <i>DUPER</i> adorable.";
  var a = document.querySelector("#link");
  a.setAttribute("href", "https://www.facebook.com");
  a.textContent = "Facebook Link";
  var img1 = document.querySelector("img");
  var img2 = document.querySelectorAll("img")[1];
  var src = img2.getAttribute("src");
  img1.setAttribute("src", src);
}, 1000);
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  alert("h1 was clicked");
});
h1.addEventListener("click", function() {
  h1.style.backgroundColor = "orange";
});

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.style.color = "red";
  });
}

var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", buttonClick);

function buttonClick() {
  var buttonP = document.getElementById("button-p");
  buttonP.textContent = "YAY SOMEONE CLICKED ME";
}
