let MovieList =[
  { id: 0, name: "Harry Potter", category: "Fantastic" },
  { id: 1, name: "Lord of the Rings", category: "Fantastic" },
  { id: 2, name: "Fast and Furious", category: "Action" },
  { id: 3, name: "Sinister", category: "Horror" },
  { id: 4, name: "When Harry Met Sally", category: "Comedy" },
  { id: 5, name: "Matrix", category: "Science Fiction" },
]


let firstFilteredMovieList = MovieList.filter(movie => movie.category == "Comedy")
console.log(firstFilteredMovieList);

let secondFilteredMovieList = MovieList.forEach(movie => {
  if (movie.category == "Fantastic") {
    console.log(movie);
  }
});








