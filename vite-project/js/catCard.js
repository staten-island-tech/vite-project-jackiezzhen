function catCard(cat) {
  const cardHTML = `
    <div class="newcard">
      <img class="catImg" id="baseImg" src="img/${cat.baseUrl}.webp" alt="Image/Error">
      <img class="catImg" id="evolvedImg" src="img/${cat.evolvedUrl}.webp" alt="Image/Error">
      <img class="catImg" id="trueImg" src="img/${cat.trueUrl}.webp" alt="Image/Error">
      <div class="imgbtn">
        <button id="basebutton">${cat.base}</button>
        <button id="evolvedbutton">${cat.evolved}</button>
        ${cat.true != null ? `<button id="truebutton">${cat.true}</button>` : ''}
      </div>
    </div>
    
    <style>
      #evolvedImg, #trueImg {
        display: none;
      }
    </style>
  `;

  document.querySelector('.container').insertAdjacentHTML('beforeend', cardHTML);

  const baseImg = document.getElementById("baseImg");
  const evolvedImg = document.getElementById("evolvedImg");
  const trueImg = document.getElementById("trueImg");

  document.getElementById("basebutton").addEventListener("click", () => {
    baseImg.style.display = "inline-block";
    evolvedImg.style.display = "none";
    trueImg.style.display = "none";
  });

  document.getElementById("evolvedbutton").addEventListener("click", () => {
    baseImg.style.display = "none";
    evolvedImg.style.display = "inline-block";
    trueImg.style.display = "none";
  });

  document.getElementById("truebutton").addEventListener("click", () => {
      baseImg.style.display = "none";
      evolvedImg.style.display = "none";
      trueImg.style.display = "inline-block";
    });
  }

export { catCard };
