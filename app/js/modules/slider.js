//slider section JS

function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {


    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          totalSlide = document.querySelector(totalCounter),
          currentSLide = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width; 

    let slideIndex = 1;
    let offset = 0;




    if (slides.length < 10) {
        totalSlide.innerHTML = `0${slides.length}`;
        currentSLide.innerHTML = `0${slideIndex}`;
    } else {
        totalSlide.innerHTML = slides.length;
        currentSLide.innerHTML = slideIndex;
    }

    // slider inline styles change

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = 'all 0.5s';

        slidesWrapper.style.overflow = 'hidden';

        slider.style.position = `relative`;

    // change ends

    slides.forEach(slide => {
        slide.style.width = width;
    });



    const dots = document.createElement('ol'),
          arrDots = [];
            dots.classList.add('carousel-dots');
            dots.style.cssText = `
                position: absolute;
                right: 0;
                bottom: 70px;
                left: 0;
                z-index: 15;
                display: flex;
                justify-content: center;
                margin-right: 15%;
                margin-left: 15%;
                list-style: none;
    `;

    slider.append(dots);


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
            `;
            
    if (i == 0) {
        dot.style.opacity = 1;
    }
        dots.append(dot);
        arrDots.push(dot);
    }


    function currentSlidesIndex() {
        if (slideIndex < 10) {
            currentSLide.innerHTML = `0${slideIndex}`;
        } else {
            currentSLide.innerHTML = slideIndex;
        }
    }

    function dotsStyleChange() {
        arrDots.forEach(dot => dot.style.opacity = '.5');
        arrDots[slideIndex - 1].style.opacity = 1;
    }


    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length -1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

    slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        currentSlidesIndex();
        dotsStyleChange(); 
    });



    prev.addEventListener('click', () => {
        if(offset == 0) {                
            offset = deleteNotDigits(width) * (slides.length -1);
        } else {
            offset -= deleteNotDigits(width);
        }
            slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        currentSlidesIndex();
        dotsStyleChange(); 
    });

    arrDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);


            slidesField.style.transform = `translateX(-${offset}px)`;

            currentSlidesIndex();    
            dotsStyleChange(); 
        });
    });
}

export default slider;