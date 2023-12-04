import { allCats } from "./allCats.js";
import { catCard } from "./catCard.js";

const DOMSelectors = {
  container: document.querySelector(".container"),
  normal: document.getElementById("normalCats"),
  special: document.getElementById("specialCats"),
  rare: document.getElementById("rareCats"),
  superRare: document.getElementById("superRare"),
  uberRare: document.getElementById("uberRare"),
  legend: document.getElementById("legendCats"),
  legendRare: document.getElementById("legendRare"),
  red: document.getElementById("red"),
  floating: document.getElementById("floating"),
  black: document.getElementById("black"),
  metal: document.getElementById("metal"),
  angel: document.getElementById("angel"),
  alien: document.getElementById("alien"),
  zombie: document.getElementById("zombie"),
  aku: document.getElementById("aku"),
  relic: document.getElementById("relic"),
  traitless: document.getElementById("traitless"),
  all: document.getElementById("allCats"),
  rarity: document.querySelectorAll(".rarityButtons"),
  type: document.querySelectorAll(".targetTypes"),
};
//  Theme Changer
const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
  document.body.classList.toggle("theme-color");
});

// Print All Cards
allCats.forEach((cat) => catCard(cat));

// Filter Cards by Rarity
DOMSelectors.rarity.forEach((button) => {
  button.addEventListener("click", function (event) {
    const name = event.target.textContent;
    console.log(name);
    const catFilter = allCats.filter((cat) => cat.rarity.includes(name));
    DOMSelectors.container.textContent = "";
    catFilter.forEach((cat) => catCard(cat));
  });
});
//Filter Cards by Type
DOMSelectors.type.forEach((button) => {
  button.addEventListener("click", function (event) {
    const name = event.target.textContent;
    console.log(name);
    // Check if All button is clicked
    if (name !== "All") {
      const catFilter = allCats.filter((cat) => cat.type.includes(name));
      DOMSelectors.container.textContent = "";
      catFilter.forEach((cat) => catCard(cat));
    }
    // Display All Cats with All Button
    else {
      DOMSelectors.all.addEventListener("click", () => {
        DOMSelectors.container.textContent = "";
        allCats.forEach((cat) => catCard(cat));
      });
    }
  });
});

export { DOMSelectors };
