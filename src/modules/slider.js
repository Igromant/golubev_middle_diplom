const slider = () => {
    
  const sliderBlocks = document.querySelectorAll('.slider')


  const getToSlide = (sliderBlock) => {
      const allSlides = document.querySelectorAll(`.${sliderBlock.id}__item`);
          let slides = []
          let slide1 = []
          let slide2 = []
          

          allSlides.forEach(slide => {
              if (slide.classList.contains('item-not')) {
                  slide2.push(slide)
              } else slide1.push(slide)
          })
          slides.push(slide1)
          slides.push(slide2)
          return {slides}
  }

  const prevSlide = (slides, index, strClass) => {
      slides[index].forEach(slide => {
        slide.classList.add(strClass)
          
      })
  }

  const nextSlide = (slides, index, strClass) => {
      slides[index].forEach(slide => {
          slide.classList.remove(strClass)
      })
  }


  sliderBlocks.forEach((sliderBlock) => {
    if (window.innerWidth <= 576) {
        let slides = getToSlide(sliderBlock).slides
        document.querySelector('.benefits-wrap').style.justifyContent = "center"
        slides.forEach(item => {
            for (let i = 1; i < item.length; i++) {
                if (item[i] !== 'item-not') {
                    item[i].classList.add('item-not')
                }
            }
        })
    }
      sliderBlock.addEventListener('click', (e) => {
        e.preventDefault(e)

          let slides = getToSlide(sliderBlock).slides
          
          let currentSlide = 0

          if (!e.target.closest('.arrows')) {
              return
          }
         
          prevSlide(slides, currentSlide, 'item-not')

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
          
          nextSlide(slides, currentSlide, 'item-not')
      })
  })
  
}
export default slider