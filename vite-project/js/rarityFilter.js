import { allCats } from "./allCats.js";
import {catCard} from "./dom.js";
const DOMSelectors = {
  container: document.querySelector('.container'),
  normal: document.getElementById("normalCats"),
  special: document.getElementById("specialCats"),
  rare: document.getElementById("rareCats"),
  superRare: document.getElementById("superRare"),
  uberRare: document.getElementById("uberRare"),
  legend: document.getElementById("legendCats"),
  legendRare: document.getElementById("legendRare"),
}

// Normal Cats Filter
  DOMSelectors.normal.addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );  
  console.log(normalCats)
  DOMSelectors.container.textContent =""
  const normalCatsHTML = normalCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    normalCatsHTML.join("")
  );
});

// Special Cats Filter
  DOMSelectors.special.addEventListener("click", () => {
  const specialCats = allCats.filter((cat) =>
    cat.rarity.includes("Special Cats")
  );
  DOMSelectors.container.textContent =""
  const specialHTML = specialCats.map((cat) +=> catCard(cat));
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    specialHTML.join("")
  );
});

// Rare Cats Filter
DOMSelectors.rare.addEventListener("click", () => {
  const rareCats = allCats.filter((cat) => cat.rarity.includes("Rare Cats"));
  while (DOMSelectors.container.firstChild) {
    DOMSelectors.container.removeChild(DOMSelectors.container.firstChild);
  }

  const rareHTML = rareCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    rareHTML.join("")
  );
});

//Super Rare Cats Filter
DOMSelectors.superRare.addEventListener("click", () => {
  const superRare = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );
  while (DOMSelectors.container.firstChild) {
    DOMSelectors.container.removeChild(DOMSelectors.container.firstChild);
  }

  const superRareHTML = normalCats.map((cat) => catCard(cat));

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    superRareHTML.join("")
  );
});

// Uber Super Rare Filter
  DOMSelectors.uberRare.addEventListener("click", () => {
  const uberRareCats = allCats.filter((cat) =>
    cat.rarity.includes("Uber Super Rare")
  );
  while (DOMSelectors.container.firstChild) {
    DOMSelectors.container.removeChild(DOMSelectors.container.firstChild);
  }

  const uberRareHTML = uberRareCats.map((cat) => catCard(cat));

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    uberRareHTML.join("")
  );
});

// Legend Cats Filter
  DOMSelectors.legend.addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Legend Cats")
  );
  while (DOMSelectors.container.firstChild) {
    DOMSelectors.container.removeChild(DOMSelectors.container.firstChild);
  }

  const legendCatsHTML = legendCats.map((cat) => catCard(cat));

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    legendCatsHTML.join("")
  );
});

// Legend Rare Filter
  DOMSelectors.legendRare.addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Legend Rare")
  );
  while (DOMSelectors.container.firstChild) {
    DOMSelectors.container.removeChild(DOMSelectors.container.firstChild);
  }

  const legendRareHTML = legendRare.map((cat) => catCard(cat));

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    legendRareHTML.join("")
  );
});