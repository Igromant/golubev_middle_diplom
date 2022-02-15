const certificate = () => {
    const modal = document.querySelector(".header-modal");
    const btns = document.querySelectorAll(".sertificate-document");
    const modalContent = document.querySelector(".img-responsive");
    const overlay = document.querySelector(".overlay");

  
    //Условие
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.remove()
      });
    });
  
    // Событие по клику
    modal.addEventListener("click", (e) => {
      if (/* !e.target.closest(".overlay") ||*/ e.target.classList.contains("header-modal__close")) {
          modal.style.display = "none";
          overlay.style.display = "none";
      }
    });
  };
  
  export default certificate;
  
  