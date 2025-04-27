const newNewsSwiper = new Swiper('.news-carousel__slider', {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    
  }
});
const commentSwiper = new Swiper('.comment__items', {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 16,
  navigation: {
    nextEl: '.comment__items-button-next',
    prevEl: '.comment__items-button-prev',
  },
  pagination: {
    el: '.comment_items-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  
  }
});


const questionItem = document.querySelectorAll('.question__item');
const questionItemBtn = document.querySelectorAll('.question__item-top');

questionItemBtn.forEach((item, ind) => {
  item.onclick = () => {
    questionItem[ind].classList.toggle('question__item-active');
  }
});