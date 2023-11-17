import {allCats} from './allCats.js';

function catCard(cat) {
    const cardHTML = `
      <div class="newcard">
        
        <img class="cat-image" src="${cat.nameUrl}" alt="Image/Error">
        <div class="imgbtn">
            <button class="base-button">${cat.base}</p>
            <button class="evolved-button">${cat.evolved}</button>
            <button class="true-button">${cat.true}</button>
        </div>
        <button class="removebutton">Remove</button>
      </div>`;
  
    document.querySelector('.container').insertAdjacentHTML('beforeend', cardHTML);
  
    const catImage = document.querySelector('.cat-image');
    const evolvedButton = document.querySelector('.evolved-button');
    const trueButton = document.querySelector('.true-button');
  
    evolvedButton.addEventListener('click', () => {
      catImage.src = cat.evolvedUrl;
    });
  
    trueButton.addEventListener('click', () => {
      catImage.src = cat.trueUrl;
    });
  }
function rarityFilter() {
    rarity.normalCats.addEventListener("click", rarityFilter); {
        const normalFilter = allCats.filter((normal) => normal.name.includes("Normal"))
    }
}

