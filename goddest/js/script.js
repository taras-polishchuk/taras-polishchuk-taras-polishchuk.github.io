'use strict';

const hamburger = document.querySelector('.hamburger'),
      navWrapper = document.querySelector('.nav'),
      linksWrapper = document.querySelector('.nav-list');


let clientWidth = document.body.clientWidth;


document.addEventListener("DOMContentLoaded", (e) => {
    hamburgerActivation();
});
window.addEventListener('resize', () => {
    clientWidth = document.body.clientWidth;
    hamburgerActivation();
})

function hamburgerActivation() {
    if (clientWidth < 768) {
        console.log(clientWidth);
        addSomeClass(hamburger, 'hamburger_active');
        removeSomeClass(hamburger, 'hamburger_hidden');
        addSomeClass(navWrapper, 'nav_hidden');
        addSomeClass(linksWrapper, 'nav-list_active');

        hamburger.addEventListener('click', (e) => {
            navWrapper.classList.toggle('nav_active');
            navWrapper.classList.toggle('nav_hidden');

            if (navWrapper.classList.contains('nav_active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        


    } else {
        console.log(clientWidth);
        addSomeClass(hamburger, 'hamburger_hidden');
        removeSomeClass(hamburger, 'hamburger_active');
        removeSomeClass(navWrapper, 'nav_hidden');
        removeSomeClass(linksWrapper, 'nav-list_active');
    }
}



function addSomeClass(elem, className) {
    elem.classList.add(className);
}
function removeSomeClass(elem, className) {
    elem.classList.remove(className);
}



const btn = document.querySelector('.promo__btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.style.outline = "none";

})


//slider functionality
const slideImages = document.querySelectorAll('.slider-image__item'),
      sliderTextContent = document.querySelectorAll('.slider-info__changeable-info'),
      arrowLeft = document.querySelector('.slider__switcher_arrow_left'),
      arrowRight = document.querySelector('.slider__switcher_arrow_right'),
      dots = document.querySelectorAll('.slider__switcher-dot');

function hideSlideContent(imageActiveClass, textContentActiveClass, dotActiveClass) {
    slideImages.forEach(item => {
        item.classList.remove(imageActiveClass);
    });

    sliderTextContent.forEach(item => {
        item.classList.remove(textContentActiveClass);
    });

    dots.forEach(item => {
        item.classList.remove(dotActiveClass)
    });
}

function showSlideContent(i = 0) {
    dots[i].classList.add("slider__switcher-dot_active");
    slideImages[i].classList.add("slider-image__item_active");
    sliderTextContent[i].classList.add("slider-info__changeable-info_active");
}

hideSlideContent("slider-image__item_active", "slider-info__changeable-info_active", "slider__switcher-dot_active");
showSlideContent();

dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
        const target = event.target;
    
        dots.forEach((item, i) => {
            if (item == target) {
                hideSlideContent("slider-image__item_active", "slider-info__changeable-info_active", "slider__switcher-dot_active");
                showSlideContent(i);
            }
        });
    });
});

function slideChangeByArrow(arrow) {
    arrow.addEventListener('click', (event) =>{
        const target = event.currentTarget;
        console.log(target);
        let index = 0;
        let i = 0;
        let number = 0;
        if(target && target.classList.contains("slider__switcher_arrow_right")) {     
            for(; i < dots.length; i++) {
                index = i + 1;
                if (index >= dots.length) {
                    index = 0;
                }

                if(dots[i].classList.contains('slider__switcher-dot_active')) {
                    console.log(index);
                    hideSlideContent("slider-image__item_active", "slider-info__changeable-info_active", "slider__switcher-dot_active");
                    showSlideContent(index);
                    break;
                }
            }
        } else if (target && target.classList.contains("slider__switcher_arrow_left")){
            for(; i < dots.length; i++) {
                index = i - 1;
                if (index < 0) {
                    index = dots.length - 1;
                }

                if(dots[i].classList.contains('slider__switcher-dot_active')) {
                    console.log(index);
                    hideSlideContent("slider-image__item_active", "slider-info__changeable-info_active", "slider__switcher-dot_active");
                    showSlideContent(index);
                    break;
                }
            }
        } 
    });
}

slideChangeByArrow(arrowRight);
slideChangeByArrow(arrowLeft);

new WOW().init();