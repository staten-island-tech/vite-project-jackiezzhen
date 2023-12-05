import { allCats } from "./allCats.js";
import { catCard } from "./catCard.js";

const DOMSelectors = {
  container: document.querySelector(".container"),
  all: document.getElementById("allCats"),
  rarity: document.querySelectorAll(".rarityButtons"),
  type: document.querySelectorAll(".targetTypes"),
  imgBtn: document.querySelectorAll(".imgBtn"),
};
//  Theme Changer
const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
  document.body.classList.toggle("theme-color");
});

// Print All Cards Initially
allCats.forEach((cat) => catCard(cat));

// Filter Cards by Rarity
DOMSelectors.rarity.forEach((button) => {
  button.addEventListener("click", function (event) {
    const name = event.target.textContent;
    console.log(name);
    const catFilter = allCats.filter((cat) => cat.rarity.includes(name));
    DOMSelectors.container.textContent = "";
    catFilter.map((cat) => catCard(cat));
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
      catFilter.map((cat) => catCard(cat));
    }
    // Display All Cats with All Button
    else {
      DOMSelectors.all.addEventListener("click", () => {
        DOMSelectors.container.textContent = "";
        allCats.map((cat) => catCard(cat));
      });
    }
  });
});

// Cycle through the Evolutions
document.querySelector(".container").addEventListener("click", (event) => {
  const button = event.target;
  const card = button.closest('.newcard');
  const baseImg = card.querySelector('.baseImg');
  const evolvedImg = card.querySelector('.evolvedImg');
  const trueImg = card.querySelector('.trueImg');

  if (button.classList.contains("basebutton")) {
    baseImg.style.display = "inline-block";
    evolvedImg.style.display = "none";
    trueImg.style.display = "none";
  } else if (button.classList.contains("evolvedbutton")) {
    baseImg.style.display = "none";
    evolvedImg.style.display = "inline-block";
    trueImg.style.display = "none";
  } else if (button.classList.contains("truebutton")) {
    baseImg.style.display = "none";
    evolvedImg.style.display = "none";
    trueImg.style.display = "inline-block";
  }
});

export { DOMSelectors };
