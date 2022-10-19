const watchHeroImage = document.querySelector('#watch-hero-image');
const imageArray = ['./images/watch-hero.jpg', './images/watch-hero-alt.jpg'];
let imagePosition = 0;

window.setInterval(changeHero, 5000);

function changeHero() {
    imagePosition++;
    if (imagePosition > imageArray.length - 1) {
        imagePosition = 0;
    }
    watchHeroImage.style.backgroundImage = `url('${imageArray[imagePosition]}')`;
}
