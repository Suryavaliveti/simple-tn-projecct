const image = document.getElementById('img');
const zoomButton = document.getElementById('zoom');
let scale = 1;
let zoomEnabled = false;

function zoomImage(event) {
event.preventDefault();
if (zoomEnabled) {
    if (event.deltaY < 0) {
        // Scroll Up: Zoom Out
        scale *= 0.9;
    }
    else {
        // Scroll Down: Zoom In
        scale *= 1.1;
        }
    image.style.transform = `scale(${scale})`;
    }
}
// Function to activate zoom functionality
function activateZoom() {
    zoomEnabled = true;
    zoomButton.innerText = "Hoorah!";
}
window.addEventListener('wheel', zoomImage);
zoomButton.addEventListener('click', activateZoom);

const blur1=document.getElementById('blur');
const skew=document.getElementById('skew');
const rotate=document.getElementById('rotate');
//let image = document.querySelector("#img");
let rotationAngle = 0;
let rotateEnabled = false;
function rotateImage(event) {
    event.preventDefault();
    if (rotateEnabled) {
        if (event.deltaY < 0) {
            // Scroll Up: Zoom Out
            rotationAngle += 10;;
        }
        else {
            // Scroll Down: Zoom In
            rotationAngle -= 10;;
        }
        image.style.transform = `rotate(${rotationAngle}deg)`;
    }
}
function activateRotate() {
    rotateEnabled = true;
    rotate.innerText = "Hoorah!";
}
window.addEventListener('wheel', rotateImage);
rotate.addEventListener('click', activateRotate);
let blurEnabled = false;
let blurAmount =0;
function blurImage(event) {
    if (blurEnabled) {
        if (event.deltaY > 0) {
            blurAmount += 0.25;
        }
        else {
            blurAmount -= 0.25;
        }
        image.style.filter= `blur(${Math.max(0, blurAmount)}px)`;
        event.preventDefault();
    }
}
function activateBlur() {
    blurEnabled = true;
    blur1.innerText = "Hoorah!";
}
window.addEventListener('wheel', blurImage);
blur1.addEventListener('click', activateBlur);


let skewEnabled = false;
let skewX = 0;
let skewY = 0;
function skewImage(event) {
    if (skewEnabled) {
        if (event.deltaY > 0) {
            skewX += 2;
            skewY += 2;
        }
        else {
            skewX -= 2;
            skewY -= 2;
        }
        image.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
        event.preventDefault();
    }
}
function activateSkew() {
    skewEnabled = true;
    skew.innerText = "Hoorah!";
}
window.addEventListener('wheel', skewImage);
skew.addEventListener('click', activateSkew);
