// ----burger
const burger = document.querySelector('.burger');
const burgerItem = document.querySelector('.burger__item');
const headerNav = document.querySelector('.header__nav');

burger.addEventListener("click", function (e) {
    burgerItem.classList.toggle('active');
    document.body.classList.toggle('lock');
    headerNav.classList.toggle('active');
});