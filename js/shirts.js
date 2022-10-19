const shirtHeroImage = document.querySelector('.shirt-hero-image');
const imageArray = [
    './images/shirt-hero-1.jpg',
    './images/shirt-hero-2.jpg',
    './images/shirt-hero-3.jpg',
    './images/shirt-hero-4.jpg',
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
