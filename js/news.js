const newsSwiper = new Swiper('.news-page_swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 9,
    pagination: {
        el: '.news-page_swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        },
    },
    navigation: {
        nextEl: '.news-page_swiper-button-next',
        prevEl: '.news-page_swiper-button-prev',
    },
});