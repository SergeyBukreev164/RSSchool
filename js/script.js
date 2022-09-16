const closeBtn = document.querySelector('.mobile__close');
const popupBurger = document.querySelector('.mobile__menu');
const burgerBtn = document.querySelector('.burger__btn');


burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('hide');
        popupBurger.classList.toggle('show');
        popupBurger.classList.toggle('hide');
});
closeBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('hide');
        popupBurger.classList.toggle('show');
        popupBurger.classList.toggle('hide');
});
        
const slideItem = document.querySelectorAll('.slider__img'),
      slidePrev = document.querySelector('.slidePrev'),
      slideNext = document.querySelector('.slideNext');
let slideIndex = 1;
showSlide(slideIndex);
function showSlide (n) {
        if (n > slideItem.length) {
                slideIndex = 1;
        } 
        if (n < 1) {
                slideIndex = slideItem.length;
        }
        slideItem.forEach((item) => item.style.display = 'none');
        slideItem[slideIndex-1].style.display = 'block';
}

function startSlide (n) {
        showSlide(slideIndex += n);
}

slidePrev.addEventListener('click', function () {
        startSlide(-1);
});
slideNext.addEventListener('click', function () {
        startSlide(1);
})

