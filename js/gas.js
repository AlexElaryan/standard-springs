const fastenersSwiper = new Swiper('.fasteners__items', {
    loop: true,
    slidesPerView: 2.4,
    spaceBetween: 9,
    breakpoints: {
        768: {
            slidesPerView: 9,
        },

    }
});

const fasteners = document.querySelector('.fasteners');
fasteners.querySelector('.fasteners_top').addEventListener('click', function (e) {
    fasteners.classList.toggle('fasteners-active');
});

const fastenersSlides = document.querySelectorAll('.item-fasteners');

fastenersSlides.forEach((slide, index) => {
    const slideCount = document.createElement('div');
    slideCount.classList.add('fasteners-item_countofslide');
    slideCount.innerHTML = `<p>${index + 1}</p>`;
    fastenersSlides[index].appendChild(slideCount);
});