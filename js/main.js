// navigation
const headerBurger = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close')

headerBurger.addEventListener('click', showNavigation);
navigationClose.addEventListener('click', hideNavigation);

function showNavigation() {
    navigation.classList.add('navigation_open', 'navigation_anim');
}

function hideNavigation() {
    navigation.classList.remove('navigation_open')
}

// modal

const startTrialButton = document.querySelector('.header .button');
const modalOverlay = document.querySelector('.modal__overlay');
const modalClose = document.querySelector('.modal__close');

startTrialButton.addEventListener('click', showModal)
modalClose.addEventListener('click', hideModal)

function showModal() {
    modalOverlay.classList.add('modal__overlay_open', 'modal__overlay_anim')
}

function hideModal() {
    modalOverlay.classList.remove('modal__overlay_open')
}

// scroll

const headerLink = document.querySelector('.header__navigation .header__text');

headerLink.addEventListener('click', scrollToElement);

function scrollToElement(event) {
    event.preventDefault();

    const href = event.target.getAttribute('href')
    const block = document.querySelector(href);

    window.scrollTo({
        top: block.offsetTop,
        behavior: "smooth"
    });
}

const headerLinks = document.querySelectorAll('.header__navigation .header__text');
const navLinks = document.querySelectorAll('.navigation__link');

headerLinks.forEach(function(link){
    link.addEventListener('click', scrollToElement);
});

function scrollToElement(event) {
    event.preventDefault();

    const href = event.target.getAttribute('href')
    const block = document.querySelector(href);

    window.scrollTo( {
        top: block.offsetTop,
        behavior: "smooth"
    });
}

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        hideNavigation();
        scrollToElement(event);
    });
})

// slider

const sliderText = new Swiper('.material__desc', {
    loop: true,
});

const sliderImg = new Swiper('.material__img', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    controller: {
        control: sliderText
    }
});

sliderText.controller.control = sliderImg;


// forms

const form = document.querySelector('form');

console.log(form)

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    for (let field of data.values()) {
        console.log(field);
    }
})