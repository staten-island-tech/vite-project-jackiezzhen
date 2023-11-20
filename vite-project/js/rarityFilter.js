import { allCats } from "./allCats.js";
import { DOMselectors, catCard } from "./dom.js";

// Normal Cats Filter
document.getElementById("normalCats").addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const normalCatsHTML = normalCats.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    normalCatsHTML.join("")
  );
});

// Special Cats Filter
document.getElementById("specialCats").addEventListener("click", () => {
  const specialCats = allCats.filter((cat) =>
    cat.rarity.includes("Special Cats")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const specialCatsHTML = specialCats.map((cat) => catCard(cat));
  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    specialCatsHTML.join("")
  );
});

// Rare Cats Filter
document.getElementById("rareCats").addEventListener("click", () => {
  const rareCats = allCats.filter((cat) => cat.rarity.includes("Rare Cats"));
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const rareCatsHTML = rareCats.map((cat) => catCard(cat));
  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    rareCatsHTML.join("")
  );
});

//Super Rare Cats Filter
document.getElementById("normalCats").addEventListener("click", () => {
  const superRare = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const superRareHTML = normalCats.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    normalCatsHTML.join("")
  );
});

// Uber Super Rare Filter
document.getElementById("normalCats").addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const normalCatsHTML = normalCats.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    normalCatsHTML.join("")
  );
});

// Legend Cats Filter
document.getElementById("legendCats").addEventListener("click", () => {
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
document.getElementById("normalCats").addEventListener("click", () => {
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
s