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
    
    
    <style>
      #evolvedImg, #trueImg {
        display: none;
      }
    </style>
    
    <script>
    const imgDOM = {
      baseImg: document.getElementById("baseImg");
      evolvedImg: document.getElementById("evolvedImg");
      trueImg: document.getElementById("trueImg");
      }
    imgDOM.baseImg.addEventListener("click", () => {
      imgDOM.baseImg.style.display = "inline-block";
      imgDOM.evolvedImg.style.display = "none";
      imgDOM.trueImg.style.display = "none";
    });
  
    imgDOM.evolvedImg.addEventListener("click", () => {
      imgDOM.baseImg.style.display = "none";
      imgDOM.evolvedImg.style.display = "inline-block";
      imgDOM.trueImg.style.display = "none";
    });
  
    imgDOM.trueImg.addEventListener("click", () => {
      imgDOM.baseImg.style.display = "none";
      imgDOM.evolvedImg.style.display = "none";
      imgDOM.trueImg.style.display = "inline-block";
      });
      </script>
      </div>
  `;

  document.querySelector('.container').insertAdjacentHTML('beforeend', cardHTML);
/*
  const imgDOM = {
  baseImg: document.getElementById("baseImg");
  evolvedImg: document.getElementById("evolvedImg");
  trueImg: document.getElementById("trueImg");
  }

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
    */
  }

export { catCard };
