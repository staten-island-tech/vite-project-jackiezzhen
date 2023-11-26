import { allCats } from "./allCats.js";
import { catCard } from "./catCard.js";
import { DOMSelectors } from "./main.js";

// Red Filter
DOMSelectors.red.addEventListener("click", () => {
  const redCats = allCats.filter((cat) => cat.type.includes("Red"));
  DOMSelectors.container.textContent = "";
  const redHTML = redCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", redHTML.join(""));
});

// Floating Filter
DOMSelectors.floating.addEventListener("click", () => {
  const floatingCats = allCats.filter((cat) => cat.type.includes("Floating"));
  DOMSelectors.container.textContent = "";
  const floatingHTML = floatingCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", floatingHTML.join(""));
});

// Black Filter
DOMSelectors.black.addEventListener("click", () => {
  const blackCats = allCats.filter((cat) => cat.type.includes("Black"));
  DOMSelectors.container.textContent = "";
  const blackHTML = blackCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", blackHTML.join(""));
});

// Metal Filter
DOMSelectors.metal.addEventListener("click", () => {
  const metalCats = allCats.filter((cat) => cat.type.includes("Metal"));
  DOMSelectors.container.textContent = "";
  const metalHTML = metalCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", metalHTML.join(""));
});

// Angel Filter
DOMSelectors.angel.addEventListener("click", () => {
  const angelCats = allCats.filter((cat) => cat.type.includes("Angel"));
  DOMSelectors.container.textContent = "";
  const angelHTML = angelCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", angelHTML.join(""));
});

// Alien Filter
DOMSelectors.alien.addEventListener("click", () => {
  const alienCats = allCats.filter((cat) => cat.type.includes("Alien"));
  DOMSelectors.container.textContent = "";
  const alienHTML = alienCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", alienHTML.join(""));
});

// Zombie Filter
DOMSelectors.zombie.addEventListener("click", () => {
  const zombieCats = allCats.filter((cat) => cat.type.includes("Zombie"));
  DOMSelectors.container.textContent = "";
  const zombieHTML = zombieCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", zombieHTML.join(""));
});

// Aku Filter
DOMSelectors.aku.addEventListener("click", () => {
  const akuCats = allCats.filter((cat) => cat.type.includes("Aku"));
  DOMSelectors.container.textContent = "";
  const akuHTML = akuCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", akuHTML.join(""));
});

// Relic Filter
DOMSelectors.relic.addEventListener("click", () => {
  const relicCats = allCats.filter((cat) => cat.type.includes("Relic"));
  DOMSelectors.container.textContent = "";
  const relicHTML = relicCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", relicHTML.join(""));
});

// Traitless Filter
DOMSelectors.traitless.addEventListener("click", () => {
  console.log("yes")
  const traitlessCats = allCats.filter((cat) => cat.type.includes("Traitless"));
  DOMSelectors.container.textContent = "";
  const traitlessHTML = traitlessCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend", traitlessHTML.join(""));
});

// All
DOMSelectors.all.addEventListener("click", () => {
  DOMSelectors.container.textContent = "";
  allCats.forEach((cat) => catCard(cat));
});

