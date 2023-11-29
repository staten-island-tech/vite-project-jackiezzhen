import { allCats } from './allCats.js';
import { catCard } from './catCard.js';
allCats.forEach((cat) => catCard(cat));

const DOMSelectors = {
    container: document.querySelector('.container'),
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
  };

  const theme = document.getElementById("theme")
  theme.addEventListener("click", () => {
      document.body.classList.toggle("theme-color")});

export {DOMSelectors}