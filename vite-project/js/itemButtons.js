import {allCats} from './allCats.js';

const rarityButtons = document.querySelector('.rarityButtons');
const typeButtons = document.querySelector('.targetTypes');
const container = document.querySelector('.container');

// Rarity Button
function rbutton(){
rarityButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateCards();
  });
});
}
// Type Button
function tbutton(){
typeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateCards();
  });
});
}
rbutton()
tbutton()