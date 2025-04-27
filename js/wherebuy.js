const tab = document.querySelectorAll('.wherebuy-tab__item');
const map = document.querySelectorAll('.wherebuy-map');
const tableSearch = document.querySelector('.wherebuy-tab>div');
const tabParent = tab[0].parentElement; // Assuming all buttons share the same parent

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
