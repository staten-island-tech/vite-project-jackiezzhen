import {allCats} from './allCats.js';


const DOMselectors = {
  container: document.querySelector('.container'),
  }

function catCard() {
    const cardHTML = `
      <div class="newcard">
      <img class="cat-image" src="${cat.baseUrl}" alt="Image/Error">
        <div class="imgbtn">
            <button class="base-button">${cat.base}</p>
            <button class="evolved-button">${cat.evolved}</button>
            <button class="true-button">${cat.true}</button>
        </div>
      </div>`;
    insertAdjacentHTML('beforeend', cardHTML);
    DOMselectors.container.insertAdjacentHTML('beforeend', cardHTML);};
    /*
    const catImage = document.querySelector('.cat-image');
    const evolvedButton = document.querySelector('.evolved-button');
    const trueButton = document.querySelector('.true-button');
  
    evolvedButton.addEventListener('click', () => {
      catImage.src = cat.evolvedUrl;
    });
  
    trueButton.addEventListener('click', () => {
      catImage.src = cat.trueUrl; 
    });*/
allCats.forEach((cat) => cat.catCard()); 
/*function rarityFilter() {
    rarity.normalCats.addEventListener("click", rarityFilter); {
        const normalFilter = allCats.filter((normal) => normal.name.includes("Normal"))
    }
}
*/