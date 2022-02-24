import { animate } from "./helper";

const slider = () => {
        const sliderBlocks = document.querySelectorAll('.slider')
        if (window.innerWidth <= 576) {
  
            sliderBlocks.forEach((sliderBlock) => {
        
                document.querySelector('.benefits-wrap').style.justifyContent = "center"
        
                const allSlidesBlocks = document.querySelectorAll(`.${sliderBlock.id}__item`);
                const slides = Array.from(allSlidesBlocks)
                let currentSlide = 0;
                
      
      
                for (let i = 1; i < slides.length; i++) {
                    if (slides[i].classList.contains("benefits__item")) {
                                slides[i].classList.remove('item__block')
                            } else {
                                slides[i].classList.remove('item__block')
                            }
                }
        
              const prevSlide = (elems, index, strClass) => {
                  elems[index].classList.remove(strClass)
                  animate({
                    duration: 800,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        elems[index].style.opacity = progress;
                    },
                  });
              };
      
              const nextSlide = (elems, index, strClass) => {
                  elems[index].classList.add(strClass)
                  animate({
                    duration: 800,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        elems[index].style.opacity = progress;
                    },
                  });
              };
        
                sliderBlock.addEventListener('click', (e) => {
                    e.preventDefault(e)
            
                      if (!e.target.closest('.arrows')) {
                          return
                      }
                     
                      prevSlide(slides, currentSlide, 'item__block')
            
                      if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {
                          currentSlide++;
                      } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {
                          currentSlide--;
                      }
      
                      if (currentSlide >= slides.length) {
                          currentSlide = 0
                      }
      
                      if (currentSlide < 0) {
                          currentSlide = slides.length - 1
                      }        
                      
                      nextSlide(slides, currentSlide, 'item__block')
                  })
            })
          } else {
              const getToSlide = (sliderBlock) => {
                  const allSlides = document.querySelectorAll(`.${sliderBlock.id}__item`);
                      let slides = []
                      let slide1 = []
                      let slide2 = []
                  
        
                  allSlides.forEach(slide => {
                      if (slide.classList.contains('item__block')) {
                          slide1.push(slide)
                      } else slide2.push(slide)
                  })
                  slides.push(slide1)
                  slides.push(slide2)
                  return {slides}
              }
        
              const prevSlide = (slides, index, strClass) => {
                  slides[index].forEach(slide => {
                    slide.classList.remove(strClass)
                    animate({
                        duration: 800,
                        timing(timeFraction) {
                          return timeFraction;
                        },
                        draw(progress) {
                            slide.style.opacity = progress;
                        },
                      });
                  })
              }
        
              const nextSlide = (slides, index, strClass) => {
                  slides[index].forEach(slide => {
                      slide.classList.add(strClass)
                      animate({
                        duration: 800,
                        timing(timeFraction) {
                          return timeFraction;
                        },
                        draw(progress) {
                            slide.style.opacity = progress;
                        },
                      });
                  })
              }
        
              sliderBlocks.forEach((sliderBlock) => {
                  sliderBlock.addEventListener('click', (e) => {
                    e.preventDefault(e)
                  
                      let slides = getToSlide(sliderBlock).slides
      
                      let currentSlide = 0
                  
                      if (!e.target.closest('.arrows')) {
                          return
                      }
                  
                      prevSlide(slides, currentSlide, 'item__block')
                  
                      if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {
                          currentSlide++;
                      } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {
                          currentSlide--;
                      }
                      if (currentSlide >= slides.length) {
                          currentSlide = 0
                      }
                      if (currentSlide < 0) {
                          currentSlide = slides.length - 1
                      }        
      
                      nextSlide(slides, currentSlide, 'item__block')
                  })
              })
          }
}
  
export default slider