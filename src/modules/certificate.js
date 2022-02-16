const certificate = () => {
    const btns = document.querySelectorAll(".sertificate-document");
    const overlay = document.querySelector(".overlay");

    const modalImg = document.createElement('div');
    modalImg.classList.add('header-modal', 'header-modal--opened');
    modalImg.style.cssText='max-height: 100%; margin: 30px;'
    document.body.append(modalImg);

    const btnClose = document.querySelector('.header-modal__close')
    const btnImg = btnClose.cloneNode(true);
    modalImg.append(btnImg);

    const docResource = document.querySelector('.sertificate-document .img-responsive')
    const docImg = docResource.cloneNode(true);
    docImg.src = "images/documents/original/document4.jpg"
    docImg.style.cssText=''
    
    modalImg.append(docImg)

    //Условие
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        modalImg.style.display = 'block';

    
        
        overlay.style.display = "block";
      });
    });
  
    // Событие по клику
    btnImg.addEventListener("click", () => {
        modalImg.style.display = 'none';
          overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
      modalImg.style.display = 'none';
        overlay.style.display = "none";
  });
  };
  
  export default certificate;
  
  