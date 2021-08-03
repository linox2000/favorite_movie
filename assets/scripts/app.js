const startAddMovieBtn = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelBtn = document.querySelector(".btn--passive");
const userInputs = document.querySelectorAll("input");
const addMovieBtn = document.querySelector(".btn--success");
const sectionEntry = document.getElementById("entry-text");
const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModalHandler = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};
const clearUserInput = () => {
  for (const userInput of userInputs) userInput.value = "";
};
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue === "" ||
    imageUrlValue === "" ||
    ratingValue === "" ||
    +ratingValue > 5 ||
    +ratingValue < 1
  ){
    alert("Porfavor introduz valores entre 1 a 5");
    return;
  }
  newMovies = {
    id: Math.random(),
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovies);
  clearUserInput();
  toggleMovieModalHandler();
  updatedUI();
  rendernewMovieElement(newMovies.id,newMovies.title, newMovies.imageUrl, newMovies.rating);
  console.log(movies);
};
const updatedUI = () => {
  if (movies.length === 0) sectionEntry.style.display = "block";
  else sectionEntry.style.display = "none";
};

const deleteMovieHandler = (movieId) =>{
  let movieIndex = 0;
  for(const movie of movies){
    console.log('movies',movie)
    if(movie.id === movieId){
      break;

    }
      movieIndex++;
  }
  movies.splice(movieIndex,1);
  const movieList = document.getElementById("movie-list");
  movieList.children[movieIndex].remove()
}
const rendernewMovieElement = (id,title, imageUrl, rating) => {
  const movieList = document.getElementById("movie-list");
  const newMovieEl = document.createElement("li");
  newMovieEl.className = 'movie-element';
  newMovieEl.addEventListener('click',deleteMovieHandler.bind(null,id))
  newMovieEl.innerHTML = `
    <div class ='movie-element__image'>
    <img src='${imageUrl}' alt = '${title}'>
    </div>
    <div class='movie-element__info'>
    <h2>${title}</h2>
    <p>${rating}</p>
    </div>
  `;
  movieList.append(newMovieEl);
};

startAddMovieBtn.addEventListener("click", toggleMovieModalHandler);
backdrop.addEventListener("click", toggleMovieModalHandler);
cancelBtn.addEventListener("click", toggleMovieModalHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
