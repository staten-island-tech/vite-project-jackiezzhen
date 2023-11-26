import { allCats } from "./allCats.js";
import { catCard } from "./catCard.js";
import { DOMSelectors } from "./main.js";

// Normal Cats Filter
DOMSelectors.normal.addEventListener("click", () => {
  const normalCats = allCats.filter((cat) => cat.rarity.includes("Normal Cats"));
  DOMSelectors.container.textContent = "";
  const normalCatsHTML = normalCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend",normalCatsHTML.join(""));
});

// Special Cats Filter
DOMSelectors.special.addEventListener("click", () => {
  const specialCats = allCats.filter((cat) => cat.rarity.includes("Special Cats"));
  DOMSelectors.container.textContent = "";
  const specialHTML = specialCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend",specialHTML.join(""));
});

// Rare Cats Filter
DOMSelectors.rare.addEventListener("click", () => {
  const rareCats = allCats.filter((cat) => cat.rarity.includes("Rare Cats"));
  DOMSelectors.container.textContent = "";
  const rareHTML = rareCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend",rareHTML.join(""));
});

//Super Rare Cats Filter
DOMSelectors.superRare.addEventListener("click", () => {
  const superRare = allCats.filter((cat) => cat.rarity.includes("Super Rare"));
  DOMSelectors.container.textContent = "";
  const superRareHTML = superRare.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend",superRareHTML.join(""));
});

// Uber Super Rare Filter
DOMSelectors.uberRare.addEventListener("click", () => {
  const uberRareCats = allCats.filter((cat) => cat.rarity.includes("Uber Super Rare"));
  DOMSelectors.container.textContent = "";
  const uberRareHTML = uberRareCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend",uberRareHTML.join(""));
});

// Legend Cats Filter
DOMSelectors.legend.addEventListener("click", () => {
  const legendCats = allCats.filter((cat) =>cat.rarity.includes("Legend Cats"));
  DOMSelectors.container.textContent = "";
  const legendCatsHTML = legendCats.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend",legendCatsHTML.join(""));
});

// Legend Rare Filter
DOMSelectors.legendRare.addEventListener("click", () => {
  const legendRare = allCats.filter((cat) =>cat.rarity.includes("Legend Rare"));
  DOMSelectors.container.textContent = "";
  const legendRareHTML = legendRare.map((cat) => catCard(cat));
  DOMSelectors.container.insertAdjacentHTML("beforeend",legendRareHTML.join(""));
});