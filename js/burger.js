//---------- burger
$(document).ready(function () {
    $('.burger').click(function () {
        $('body').toggleClass('lock')
    });
    $('.burger').click(function () {
        $('.header__inner').toggleClass('open')
    });
    $('.burger').click(function () {
        $('.burger').toggleClass('open')
    });
    $('.burger').click(function () {
        $('.burger__item').toggleClass('open')
    });
    $('.header__list-link').click(function (event) {
        $('.burger').removeClass('open');
    });
    $('.header__list-link').click(function (event) {
        $('.burger__item').removeClass('open');
    });
    $('.header__list-link').click(function (event) {
        $('.header__inner').removeClass('open');
    });
    $('.header__list-link').click(function (event) {
        $('body').removeClass('lock');
    });
});