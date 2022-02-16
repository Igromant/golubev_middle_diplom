const modalHeader = () => {
    const modal = document.querySelector(".services-modal");
    const btns = document.querySelectorAll("a[href^='#application']");
    const modalContent = document.querySelector(".services-modal--opened");
    const btnClose = document.querySelector(".services-modal__close")
    const overlay = document.querySelector(".overlay");
  
  
    //Условие
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.outerWidth > 768) {
          modal.style.display = "block";
          overlay.style.display = "block";
          modalContent.animate(
              [
                {
                  opacity: 0,
                  transform: "translate3D(0, -300px, 0)",
                },
                {
                  opacity: 1,
                },
              ],
              {
                duration: 500,
              }
            );
        } else {
          modal.style.display = "block";
        }
      });
    });
  
    // Событие по клику
    btnClose.addEventListener("click", () => {
          modal.style.display = "none";
          overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
          modal.style.display = "none";
          overlay.style.display = "none";
    });
  };
  
  export default modalHeader;