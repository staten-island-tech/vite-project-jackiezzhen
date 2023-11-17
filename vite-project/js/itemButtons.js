import {allCats} from './allCats.js';

const rarityButtons = document.querySelector('.rarityButtons');
const typeButtons = document.querySelector('.targetTypes');
const container = document.querySelector('.container');

// Rarity Button
rarityButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateCards();
  });
});

// Type Button
typeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateCards();
  });
});