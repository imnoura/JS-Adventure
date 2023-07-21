//the function should display all the properties of this object that are of type string
const movie = {
  title: "La Notte",
  releaseYear: 1961,
  rating: 8.1,
  director: "Michelangelo Antonioni",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
