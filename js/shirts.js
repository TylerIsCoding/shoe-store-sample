const shirtHeroImage = document.querySelector('.shirt-hero-image');
const storeLogo = document.querySelector('#company-logo');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.hamburger-nav-menu');
const imageArray = [
    './images/images-hero/shirt-hero-1.jpg',
    './images/images-hero/shirt-hero-2.jpg',
    './images/images-hero/shirt-hero-3.jpg',
    './images/images-hero/shirt-hero-4.jpg',
];
let imagePosition = 0;

window.setInterval(changeHero, 4000);

function changeHero() {
    imagePosition++;
    if (imagePosition > imageArray.length - 1) {
        imagePosition = 0;
    }
    shirtHeroImage.style.backgroundImage = `url('${imageArray[imagePosition]}')`;
}

function redirectHome() {
    window.location.href = 'index.html';
}

storeLogo.addEventListener('click', redirectHome);
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.hamburger-nav-link').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
);
