// index js

if (document.querySelector('.news-carousel__slider')) {
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
}

if (document.querySelector('.comment__items')) {
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
}

if (document.querySelectorAll('.question__item')[0]) {
  const questionItem = document.querySelectorAll('.question__item');
  const questionItemBtn = document.querySelectorAll('.question__item-top');

  questionItemBtn.forEach((item, ind) => {
    item.onclick = () => {
      questionItem[ind].classList.toggle('question__item-active');
    }
  });
  console.log(9);
}
// index js end


// gas js

const fastenersItems = document.querySelector('.fasteners__items');
const fasteners = document.querySelector('.fasteners');

if (fastenersItems) {
  new Swiper(fastenersItems, {
    loop: true,
    slidesPerView: 2.4,
    spaceBetween: 9,
    breakpoints: {
      768: {
        slidesPerView: 9,
      },
    },
  });
}

if (fasteners) {
  const topButton = fasteners.querySelector('.fasteners_top');
  if (topButton) {
    topButton.addEventListener('click', () => {
      fasteners.classList.toggle('fasteners-active');
    });
  }

  const fastenersSlides = fasteners.querySelectorAll('.item-fasteners');
  fastenersSlides.forEach((slide, index) => {
    const slideCount = document.createElement('div');
    slideCount.className = 'fasteners-item_countofslide';
    slideCount.innerHTML = `<p>${index + 1}</p>`;
    slide.appendChild(slideCount);
  });
}

// gas js end


// news js

if (document.querySelector('.news-page_swiper')) {
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
}

//news js end

// where to buy js

const tab = document.querySelectorAll('.wherebuy-tab__item');

if (tab[0]) {
  const map = document.querySelectorAll('.wherebuy-map');
  const tableSearch = document.querySelector('.wherebuy-tab>div');
  const tabParent = tab[0].parentElement;


  function updateMargin() {
    const activeTab = document.querySelector('.wherebuy-tab__item-active');
    const activeIndex = Array.from(tab).indexOf(activeTab);
    if (activeIndex === 1) {
      if (window.innerWidth < 768) {
        tabParent.style.marginBottom = '60px';
      } else {
        tabParent.style.marginBottom = '16px';
      }
    }
  }

  tab.forEach((btn, ind) => {
    if (btn.classList.contains('wherebuy-tab__item-active')) {
      map.forEach((item) => {
        item.classList.remove('wherebuy-map-active');
      });
      map[ind].classList.add('wherebuy-map-active');
    }
    btn.addEventListener('click', () => {
      tab.forEach((item) => {
        item.classList.remove('wherebuy-tab__item-active');
      });
      btn.classList.add('wherebuy-tab__item-active');
      map.forEach((item) => {
        item.classList.remove('wherebuy-map-active');
      });
      map[ind].classList.add('wherebuy-map-active');
      if (ind === 1) {
        tableSearch.classList.add('wherebuy-tab__search-active');
      } else {
        tableSearch.classList.remove('wherebuy-tab__search-active');
        tabParent.style.marginBottom = '0px';
      }
      updateMargin(); // call it after click
    });
  });

  window.addEventListener('resize', updateMargin);
}


// where to buy js end