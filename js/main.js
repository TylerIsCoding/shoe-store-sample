const bottom = document.querySelector('.bottom');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const aj3Slide = document.querySelector('.aj3');
const aj4Slide = document.querySelector('.aj4');
const af1Slide = document.querySelector('.af1');
const yb350Slide = document.querySelector('.yb350');
const storeLogo = document.querySelector('#company-logo');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.hamburger-nav-menu');

const slideArray = [aj3Slide, af1Slide, yb350Slide, aj4Slide];
const colorArray = ['style1', 'style2', 'style3', 'style4', 'style5'];

const sneakerButton = document.getElementById('sneakers');
const watchesButton = document.getElementById('watches');
const shirtsButton = document.getElementById('shirts');
const jacketsButton = document.getElementById('hoodies');

let currentSlide = aj3Slide;
let currentStyle = 'style1';

arrowLeft.addEventListener('click', heroLeft);
arrowRight.addEventListener('click', heroRight);
sneakerButton.addEventListener('click', redirectSneakers);
watchesButton.addEventListener('click', redirectWatches);
shirtsButton.addEventListener('click', redirectShirts);
jacketsButton.addEventListener('click', redirectJackets);
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

function redirectHome() {
    window.location.href = 'index.html';
}

function redirectSneakers() {
    window.location.href = 'sneakers.html';
}

function redirectWatches() {
    window.location.href = 'watches.html';
}

function redirectShirts() {
    window.location.href = 'shirts.html';
}

function redirectJackets() {
    window.location.href = 'jackets.html';
}

function heroRight() {
    let currentPosition = slideArray.indexOf(currentSlide);
    changeBG();
    hideSlide();
    if (currentPosition === slideArray.length - 1) {
        currentPosition = 0;
        currentSlide = slideArray[currentPosition];
        changeSlide(currentSlide);
    } else {
        currentPosition++;
        currentSlide = slideArray[currentPosition];
        changeSlide(currentSlide);
    }
}

function heroLeft() {
    let currentPosition = slideArray.indexOf(currentSlide);
    changeBG();
    hideSlide();
    if (currentPosition === 0) {
        currentPosition = slideArray.length - 1;
        currentSlide = slideArray[currentPosition];
        changeSlide(currentSlide);
    } else {
        currentPosition--;
        currentSlide = slideArray[currentPosition];
        changeSlide(currentSlide);
    }
}

function changeBG() {
    let currentNum = colorArray.indexOf(currentStyle);
    let newNum = randomNum();
    bottom.classList.remove(currentStyle);
    while (currentNum === newNum) {
        newNum = randomNum();
    }
    currentStyle = colorArray[newNum];
    bottom.classList.add(currentStyle);
}

function randomNum() {
    let num = Math.floor(Math.random() * colorArray.length);
    return num;
}

function hideSlide() {
    currentSlide.classList.add('fade-out-slide');
    currentSlide.classList.add('hidden');
}

function changeSlide(current) {
    current.classList.remove('hidden');
    current.classList.remove('fade-out-slide');
}
