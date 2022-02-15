const slider = () => {
        const sliderBlock = document.querySelector(".benefits-arrows");
        const slides = document.querySelectorAll(".benefits__item");

        
        const slideActive = () => {
            for(const item of slides){
                item.style.display = 'block'
            }
        }
      
        let currentSlide = 0;
      
        const prevSlide = (elems, index) => {
          elems[index].style.display = 'none';
        };
      
        const nextSlide = (elems, index) => {
          elems[index].style.display = 'block';
        };
      
        sliderBlock.addEventListener("click", (e) => {
          e.preventDefault();

          if (!e.target.matches(".benefits__arrow")) {
            return;
          }
      
          prevSlide(slides, currentSlide, slideActive);
      
          if (e.target.matches(".benefits__arrow--right")) {
            currentSlide++;
          } else if (e.target.matches(".benefits__arrow--left")) {
            currentSlide--;
          }
      
          if (currentSlide >= slides.length) {
            currentSlide = 0;
          }
      
          if (currentSlide < 0) {
            currentSlide = slides.length - 1;
          }
      
          nextSlide(slides, currentSlide, slideActive);
        });
      };
      
      
      
export default slider;

