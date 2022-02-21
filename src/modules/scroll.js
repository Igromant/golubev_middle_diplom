const scroll = () => {
    const btnScroll = document.querySelector('.smooth-scroll');
    const section = document.querySelector(".section")
    let num = 0 

    const hiddenScroll = () => {btnScroll.style.display = 'none';}
    hiddenScroll();
    
    window.onscroll = () => {
        if (window.pageYOffset < section.scrollHeight) {
            btnScroll.style.display = 'none'
            num++
        } else if (window.pageYOffset > section.scrollHeight && num > 0){
            btnScroll.style.display = 'block'
        }
    };
    
    btnScroll.addEventListener('click', function (e) {
        e.preventDefault();
        const id = btnScroll.getAttribute('href');

    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    return id
        
    });
}

export default scroll;