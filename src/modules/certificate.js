const certificate = () => {
  const modal = document.querySelector(".header-modal");

  const img = document.querySelector("img-responsive")
  const btnClose = document.querySelector("services-modal__close")
    const btns = document.querySelectorAll(".sertificate-document");
    const overlay = document.querySelector(".overlay");
    const modalContent = document.querySelector(".header-modal--opened");


  
    //Условие
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        modal.style.display = 'block';

        modal.innerHTML = '';

    
        modal.append('')
        overlay.style.display = "block";
      });
    });
  
    // Событие по клику
    modal.addEventListener("click", (e) => {
      if (/* !e.target.closest(".overlay") ||*/ e.target.classList.contains("header-modal__close")) {
          overlay.style.display = "none";
      }
    });
  };
  
  export default certificate;
  
  