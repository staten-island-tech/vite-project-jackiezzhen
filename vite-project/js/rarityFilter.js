import { allCats } from "./allCats.js";
import {catCard} from "./dom.js";
const DOMselectors = {
  container: document.querySelector('.container'),
  normal: document.getElementById("normalCats"),
  special: document.getElementById("specialCats"),
  rare: document.getElementById("rareCats"),
  superRare: document.getElementById("superRare"),
  uberRare: document.getElementById("uberRare"),
  legend: document.getElementById("legendCats"),
  legendRare: document.getElementById("legendRare"),
}
function (){
normal : DOMselectors.normal,

return {
  normal: 
}

// Normal Cats Filter
  normal.addEventListener("click", function() {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );
  console.log(normalCats)
  DOMselectors.container.textContent =""
  const normalCatsHTML = normalCats.map((cat) => catCard(cat));
  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    normalCatsHTML.join("")
  );
});

// Special Cats Filter
special.addEventListener("click", function() {
  const specialCats = allCats.filter((cat) =>
    cat.rarity.includes("Special Cats")
  );
  DOMselectors.container.textContent =""
  const specialHTML = specialCats.map((cat) => catCard(cat));
  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    specialHTML.join("")
  );
});

// Rare Cats Filter
rare.addEventListener("click", () => {
  const rareCats = allCats.filter((cat) => cat.rarity.includes("Rare Cats"));
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const rareHTML = rareCats.map((cat) => catCard(cat));
  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    rareHTML.join("")
  );
});

//Super Rare Cats Filter
superRare.addEventListener("click", () => {
  const superRare = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const superRareHTML = normalCats.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    superRareHTML.join("")
  );
});

// Uber Super Rare Filter
uberRare.addEventListener("click", () => {
  const uberRareCats = allCats.filter((cat) =>
    cat.rarity.includes("Uber Super Rare")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const uberRareHTML = uberRareCats.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    uberRareHTML.join("")
  );
});

// Legend Cats Filter
legend.addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Legend Cats")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const legendCatsHTML = legendCats.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    legendCatsHTML.join("")
  );
});

// Legend Rare Filter
legendRare.addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Legend Rare")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const legendRareHTML = legendRare.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    legendRareHTML.join("")
  );
});
