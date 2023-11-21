import { allCats } from "./allCats.js";
import { catCard } from "./dom.js";

// Traitless Filter
document.getElementById("btnTraitless").addEventListener("click", () => {
  const traitless = allCats.filter((cat) =>
    cat.rarity.includes("Traitless")
  );
  while (DOMselectors.container.firstChild) {
    DOMselectors.container.removeChild(DOMselectors.container.firstChild);
  }

  const traitlessHTML = normalCats.map((cat) => catCard(cat));

  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    traitlessHTML.join("")
  );
});