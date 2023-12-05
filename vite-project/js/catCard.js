function catCard(cat) {
  const cardHTML = `
    <div class="newcard">
      <div class="catImg">
        <img class="baseImg" src="img/${cat.baseUrl}.webp" alt="Image/Error">
        <img class="evolvedImg" src="img/${
          cat.evolvedUrl
        }.webp" alt="Image/Error">
        ${
          cat.trueUrl != null
            ? `<img class="trueImg" src="img/${cat.trueUrl}.webp" alt="Image/Error"></button>`
            : ""
        }
      </div>
      <p>${cat.cost}</p>
      <div class="imgBtn">
        <button class="basebutton">${cat.base}</button>
        <button class="evolvedbutton">${cat.evolved}</button>
        ${
          cat.true != null
            ? `<button class="truebutton">${cat.true}</button>`
            : ""
        }
      </div>
    </div>
    <style>
      .evolvedImg, .trueImg {
        display: none;
      }
    </style>
  `;
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", cardHTML);
}
export { catCard };
