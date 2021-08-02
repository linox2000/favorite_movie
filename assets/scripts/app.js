const addMovieBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector('.btn--passive');
const userInputs = document.querySelectorAll('input')

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible')
}

const toggleMovieModalHandler = ()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop()
};

addMovieBtn.addEventListener('click',toggleMovieModalHandler);
backdrop.addEventListener('click',toggleMovieModalHandler);
cancelBtn.addEventListener('click',toggleMovieModalHandler)

