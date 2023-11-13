function removebtn() {
    let removeButtons = document.querySelectorAll(".removebutton");
    removeButtons.forEach((btn) => {
      btn.addEventListener("click", remove);
    });
  }
  

export {}