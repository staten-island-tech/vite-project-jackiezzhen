import { allCats } from './allCats.js';

function catCard(cat) {
  const cardHTML = `
    <div class="newcard">
      <img class="catImg" src="images/${cat.baseUrl}" alt="Image/Error">
      <div class="imgbtn">
        <button class="base-button">${cat.base}</button>
        <button class="evolved-button">${cat.evolved}</button>
        <button class="true-button">${cat.true}</button>
      </div>
    </div>`;
  
  document.querySelector('.container').insertAdjacentHTML('beforeend', cardHTML);
}

allCats.forEach((cat) => catCard(cat));

export{catCard};