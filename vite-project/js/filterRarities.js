import { normalCats } from './units & rarities/normal';
import{rarity} from './units & rarities/rarityfile'

function normalCatsfilter() {
    let normalbutton = document.querySelectorAll(rarity.normalCats);
    normalbutton.addEventListener("click", )
    removeButtons.forEach((btn) => {
      btn.addEventListener("click", remove);
    });
  }
function specialCatsfilter() {

}

function rareCatsfilter() {

}

function superRarefilter() {

}

function uberRarefilter() {

}

function legendCatsfilter() {

}

function legendRarefilter() {

}
const rarityfilter = [normalCatsfilter, specialCatsfilter, rareCatsfilter, superRarefilter, uberRarefilter, legendCatsfilter, legendRarefilter];
export {rarityfilter}