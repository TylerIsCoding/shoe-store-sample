const hero1 = document.getElementById('hero-1');
const hero2 = document.getElementById('hero-2');
const hero3 = document.getElementById('hero-3');
const hero4 = document.getElementById('hero-4');

const sneakerImage = document.querySelectorAll('.sneaker-pic');
const soldOut = document.querySelectorAll('.sold-out');

const heroArray = [hero1, hero2, hero3, hero4];
let i = 0;

sneakerImage.forEach(image => {
    image.addEventListener('mouseover', function changeAlt() {
        let source = image.src.slice(0, image.src.length - 4);
        image.src = source + '-alt' + '.jpg';
    });
    image.addEventListener('mouseout', function changeNorm() {
        let norm = image.src.slice(0, image.src.length - 8);
        image.src = norm + '.jpg';
    });
});

soldOut.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    });
});

window.setInterval(changeHero, 6000);

function changeHero() {
    heroArray[i].classList.add('invisible');
    i++;
    if (i > heroArray.length - 1) i = 0;
    heroArray[i].classList.remove('invisible');
}
