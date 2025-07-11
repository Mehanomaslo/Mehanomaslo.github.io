// спуск до блока info
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - 50;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});

// page swiper -------
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container__preview', {
        loop: true,
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            // Параллельная
            // смена прозрачности
            crossFade: true
        },
        slidesPerGroup: 1,
        simulateTouch: false,
        autoplay: {
            // Пауза между прокруткой
            delay: 3000,
            // Закончить на последнем слайде
            stopOnLastSlide: false,
        },
    });
});


// catalog swiper ------
const swiper = new Swiper('.catalog__swiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
});


// fullscreen
document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('click', event => {
        let target = event.target.closest('#image-link'); // Получаем ближайшую ссылку

        if (!target || !target.hasAttribute('href')) return; // Проверяем наличие ссылки

        event.preventDefault();

        const clickedImgSrc = target.querySelector('img').src; // Получаем источник изображения

        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = clickedImgSrc;
        fullscreenImage.classList.add('fullscreen-image');
        fullscreenImage.onclick = closeFullScreen;

        document.body.appendChild(fullscreenImage);
    });
});

function closeFullScreen() {
    const fullscreenImages = document.querySelectorAll('.fullscreen-image');
    if (fullscreenImages.length > 0) {
        fullscreenImages.forEach(img => img.remove());
    }
}


// popup ------------

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

// burger menu ---------

document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector('.burger');
    const headerList = document.querySelector('.menu__phone');
    const bodyTag = document.querySelector('body');
    const links = document.querySelectorAll('.menu__link--phone');

    burgerButton.addEventListener('click', function () {
        bodyTag.classList.toggle('lock');
        headerList.classList.toggle('open');
        burgerButton.classList.toggle('open');
        burgerButton.querySelectorAll('.burger__item').forEach(item => item.classList.toggle('open'));
    });

    links.forEach(link => link.addEventListener('click', function (event) {
        burgerButton.classList.remove('open');
        headerList.classList.remove('open');
        burgerButton.querySelectorAll('.burger__item').forEach(item => item.classList.remove('open'));
        bodyTag.classList.remove('lock');
    }));
});