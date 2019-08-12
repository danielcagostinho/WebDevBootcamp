setTimeout(function() {
  //Prints the first paragraph tag by using different methods of accessing it
  var method1 = document.getElementById("first");
  var method2 = document.getElementsByTagName("p")[0];
  var method3 = document.getElementsByClassName("special")[0];
  var method4 = document.querySelector(".special");
  var method5 = document.querySelector("#first");
  var method6 = document.querySelector("p");
  var method7 = document.querySelectorAll(".special")[0];
  var method8 = document.querySelectorAll("#first")[0];
  var method9 = document.querySelectorAll("p")[0];

  console.log(
    method1 === method2 &&
      method1 == method3 &&
      method1 == method4 &&
      method1 == method5 &&
      method1 == method6 &&
      method1 == method7 &&
      method1 == method8 &&
      method1 == method9
  );
}, 500);
