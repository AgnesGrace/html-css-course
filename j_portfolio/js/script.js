const navList = document.querySelector('.nav-list');
const fasBars = document.querySelector('.fa-bars');
const listItem = document.querySelectorAll('.list-item');
const header = document.querySelector('.header-container');

let isScrolling = false;

fasBars.addEventListener('click', () => {
  navList.style.right = '0';
});

listItem.forEach((item) => {
  item.addEventListener('click', () => {
    navList.style.right = '-12rem';
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    if (!isScrolling) {
      header.classList.add('scrolling');
      isScrolling = true;
    }
  } else {
    header.classList.remove('scrolling');
    isScrolling = false;
  }
});
