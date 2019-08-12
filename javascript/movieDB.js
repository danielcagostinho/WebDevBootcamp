movies = [
  {
    title: "Once Upon a Time in Hollywood",
    hasWatched: true,
    rating: 9.1
  },
  {
    title: "Pulp Fiction",
    hasWatched: true,
    rating: 9.7
  },
  {
    title: "Inglorious Basterds",
    hasWatched: true,
    rating: 8.7
  },
  {
    title: "Matilda",
    hasWatched: false,
    rating: 3453245789
  },
  {
    title: "The Martian",
    hasWatched: false,
    rating: 7.9
  }
];

movies.forEach(function(movie) {
  console.log(buildString(movie));
});

function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "have not watched ";
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + " stars";
  return result;
}
