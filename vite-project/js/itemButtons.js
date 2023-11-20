import { allCats } from "./allCats.js";
import { DOMselectors, catCard } from "./dom.js";

document.getElementById("normalCats").addEventListener("click", () => {
  const normalCats = allCats.filter((cat) =>
    cat.rarity.includes("Normal Cats")
  );
  console.log(normalCats);
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const normalCatsHTML = normalCats.map((cat) => catCard(cat));
  console.log(normalCatsHTML)
  DOMselectors.container.insertAdjacentHTML("beforeend", normalCatsHTML.join(''));
});
