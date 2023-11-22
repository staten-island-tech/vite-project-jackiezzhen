import { allCats } from './allCats.js';

function catCard(cat) {
  const cardHTML = `
    <div class="newcard">
      <img class="catImg" src="img/${cat.baseUrl}.webp" alt="Image/Error">
      <div class="imgbtn">
        <button class="base-button">${cat.base}</button>
        <button class="evolved-button">${cat.evolved}</button>
        <button class="true-button">${cat.true}</button>
      </div>
    </div>`;
  
  document.querySelector('.container').insertAdjacentHTML('beforeend', cardHTML);
}

export{catCard};