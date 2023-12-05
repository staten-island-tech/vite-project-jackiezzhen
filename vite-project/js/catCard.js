function catCard(cat) {
  const cardHTML = `
    <div class="newcard">
      <div class="catImg">
        <img class="baseImg" src="img/${cat.baseUrl}.webp" alt="Image/Error">
        <img class="evolvedImg" src="img/${cat.evolvedUrl}.webp" alt="Image/Error">
        ${cat.trueUrl != null ? `<img class="trueImg" src="img/${cat.trueUrl}.webp" alt="Image/Error"></button>` : ""}
      </div>
      <p>${cat.cost}</p>
      <div class="imgbtn">
        <button class="basebutton">${cat.base}</button>
        <button class="evolvedbutton">${cat.evolved}</button>
        ${cat.true != null ? `<button class="truebutton">${cat.true}</button>` : ""}
      </div>
    </div>
    <style>
      .evolvedImg, .trueImg {
        display: none;
      }
    </style>
  `;
  document.querySelector(".container").insertAdjacentHTML("beforeend", cardHTML);
};
const buttons = document.querySelectorAll(".imgbtn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest('.newcard');
    const baseImg = card.querySelector('.baseImg');
    const evolvedImg = card.querySelector('.evolvedImg');
    const trueImg = card.querySelector('.trueImg');

    if (event.target.classList.contains("basebutton")) {
      baseImg.style.display = "inline-block";
      evolvedImg.style.display = "none";
      trueImg.style.display = "none";
    } else if (event.target.classList.contains("evolvedbutton")) {
      baseImg.style.display = "none";
      evolvedImg.style.display = "inline-block";
      trueImg.style.display = "none";
    } else if (event.target.classList.contains("truebutton")) {
      baseImg.style.display = "none";
      evolvedImg.style.display = "none";
      trueImg.style.display = "inline-block";
    }
  });
});
export { catCard };