// I had to wrap this in a set timeout because the console.log was running before the html was loaded properly.
setTimeout(function() {
  // This first method grabs a single element matched by ID and returns it
  var tag = document.getElementById("highlight");
  console.log(tag);
  // This returns all elements that have a __ classname
  var tags = document.getElementsByClassName("bolded");
  console.log(tags);
  // This returns all elements have a tag of  __
  var tags2 = document.getElementsByTagName("h1");
  console.log(tags2);
  // This will return the first instance that it finds
  var qs = document.querySelector(".bolded");
  console.log(qs);
  // This will return all instances found
  var qsa = document.querySelectorAll("h1");
  console.log(qsa);
}, 500);
