const jacketHeroImage = document.querySelector('.jacket-hero-image');
const jacketImage = document.querySelectorAll('.jacket-pic');
const storeLogo = document.querySelector('#company-logo');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.hamburger-nav-menu');
const imageArray = [
    './images/images-hero/jacket-hero-1.jpg',
    './images/images-hero/jacket-hero-2.jpg',
    './images/images-hero/jacket-hero-3.jpg',
];
let imagePosition = 0;

window.setInterval(changeHero, 4000);

function changeHero() {
    imagePosition++;
    if (imagePosition > imageArray.length - 1) {
        imagePosition = 0;
    }
    jacketHeroImage.style.backgroundImage = `url('${imageArray[imagePosition]}')`;
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

jacketImage.forEach(image => {
    image.addEventListener('mouseover', function changeAlt() {
        let source = image.src.slice(0, image.src.length - 4);
        image.src = source + '-alt' + '.png';
    });
    image.addEventListener('mouseout', function changeNorm() {
        let norm = image.src.slice(0, image.src.length - 8);
        image.src = norm + '.png';
    });
});
