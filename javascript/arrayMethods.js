var pokemon = ["bulbasaur", "charmander", "squirtle"];
console.log("The starting array is: " + pokemon);
console.log("We're going to add my favorite: Jolteon");
pokemon.push("jolteon");
console.log("The new array is " + pokemon);
console.log(
  "Let's get rid of him for now. He should actually be at the front of the array since he's my favorite."
);
pokemon.pop();
console.log("Back to the original array " + pokemon);
pokemon.unshift("jolteon");
console.log("The new array is " + pokemon);
console.log("You know what, let's get rid of him again.");
pokemon.shift();
console.log(
  "Charmander is in the " + (pokemon.indexOf("charmander") + 1) + " position."
);
var goodPokemon = pokemon.slice(0, 1);
console.log("Here's an array of good starters in gen 1: " + goodPokemon);
