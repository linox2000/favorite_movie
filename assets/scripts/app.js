const addMovieBtn = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector(".btn--success");
const backdrop = document.getElementById("backdrop");
const userInputs = document.querySelectorAll("input");
const movieList = document.getElementById("movie-list");
const sectionEntry = document.getElementById("entry-text");
const deleteModal = document.getElementById("delete-modal");
const cancelAddMovieBtn = document.querySelector(".btn--passive");

const movies = [];

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
};
const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
  toggleBackdrop();
};

const clearUserInputs = () => {
  for (const userInput of userInputs) userInput.value = "";
};

const addMovieModalHandler = () => {
  showMovieModal();
  toggleBackdrop();
};

const startAddMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const ImageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  const newMovies = {
    id: Math.random().toString(),
    title: titleValue,
    imageUrl: ImageUrlValue,
    rating: ratingValue,
  };
  if (
    titleValue.trim() === "" ||
    ImageUrlValue === "" ||
    ratingValue === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Insira o rating entre 1 a 5");
    return;
  }
  movies.push(newMovies);
  renderNewMovieEl(
    newMovies.id,
    newMovies.title,
    newMovies.imageUrl,
    newMovies.rating
  );
  updateUI();
  clearUserInputs();
  closeMovieModal();
  console.log(movies);
};

const cancelMovieHandler = () => {
  deleteModal.classList.remove("visible");
};

const updateUI = () => {
  if (movies.length === 0) sectionEntry.style.display = "block";
  else sectionEntry.style.display = "none";
};

const deleteCancelModal = (movieId) => {
  const cancelBtn = deleteModal.querySelector(".btn--passive");
  let deleteBtn = deleteModal.querySelector(".btn--danger");

  cancelBtn.addEventListener("click", () => {
    cancelMovieHandler();
  });
  cancelBtn.removeEventListener("click", cancelMovieHandler);
  deleteBtn.replaceWith(deleteBtn.cloneNode(true));

  deleteBtn = deleteModal.querySelector(".btn--danger");

  console.log(deleteBtn);

  console.log(movieId);
  deleteModal.classList.toggle("visible");
  deleteBtn.addEventListener("click", () => {
    let indexMovie = 0;
    for (const movie of movies) {
      if (movie.id === movieId) {
        break;
      }
      indexMovie++;
    }
    movies.splice(indexMovie, 1);
    console.log("deleted", movies);
    if (movies.length === 0) sectionEntry.style.display = "block";
    movieList.children[indexMovie].remove();
    cancelMovieHandler();
  });
};
const renderNewMovieEl = (id, title, imageUrl, rating) => {
  const newMovieEl = document.createElement("li");
  newMovieEl.className = "movie-element";
  newMovieEl.addEventListener("click", deleteCancelModal.bind(null, id));
  newMovieEl.innerHTML = `
    <div class ='movie-element__image'>
      <img src ='${imageUrl}'alt='${title}' />
    </div>
    <div class = 'movie-element__info'>
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
  `;
  movieList.append(newMovieEl);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

addMovieBtn.addEventListener("click", addMovieModalHandler);
backdrop.addEventListener("click", closeMovieModal);
startAddMovieBtn.addEventListener("click", startAddMovieHandler);
cancelAddMovieBtn.addEventListener("click", closeMovieModal);
