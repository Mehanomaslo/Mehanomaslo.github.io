let WhySwiper = new Swiper(".why__swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        370: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        }
    },
});

let TeamSwiper = new Swiper(".team__swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        370: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        }
    },
});

let ReviewsSwiper = new Swiper(".reviews__swiper", {
    effect: 'flip',
    flipEffect: {
        slideShadows: false,
        limitRotation: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
});

$('.feedback__label-file input[type=file]').on('change', function () {
    let file = this.files[0];
    $(this).next().html(file.name);
});