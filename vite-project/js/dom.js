import{rarity} from './units & rarities/rarityfile'
function createcard(object){
    const cardHTML = `<div class=newcard>
          <p>${object.name}</p>
            <img src="${object.imageurl}" alt="Image/Error">
            <p>${object.desc}</p>
        DOMSelectors.card.insertAdjacentHTML("beforeend", cardHTML)
        </div>`;
}
function rarityFilter() {
    rarity.normalCats.addEventListener("click", rarityFilter); {
        const normalFilter = allCats.filter((normal) => normal.name.includes("Normal"))
    }
}

