const startAddMovieBtn = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelBtn = document.querySelector(".btn--passive");
const userInputs = document.querySelectorAll("input");
const addMovieBtn = document.querySelector(".btn--success");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModalHandler = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
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
  ) alert('Porfavor introduz valores entre 1 a 5')
};

startAddMovieBtn.addEventListener("click", toggleMovieModalHandler);
backdrop.addEventListener("click", toggleMovieModalHandler);
cancelBtn.addEventListener("click", toggleMovieModalHandler);
addMovieBtn.addEventListener("click",addMovieHandler);
