const watchHeroImage = document.querySelector('#watch-hero-image');
const storeLogo = document.querySelector('#company-logo');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.hamburger-nav-menu');
const imageArray = [
    './images/images-hero/watch-hero.jpg',
    './images/images-hero/watch-hero-alt.jpg',
];
let imagePosition = 0;

window.setInterval(changeHero, 3000);

function changeHero() {
    imagePosition++;
    if (imagePosition > imageArray.length - 1) {
        imagePosition = 0;
    }
    watchHeroImage.style.backgroundImage = `url('${imageArray[imagePosition]}')`;
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
