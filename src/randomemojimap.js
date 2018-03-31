var theLeftSide = document.getElementById("apollo");
var top_position;
var left_position;


window.onload = function () {
    setInterval(function () {
        generateFaces(5);
    }, 250);
};

function generateFaces(amountOfFire) {
    theLeftSide.innerHTML = "";
    for (var i = 0; i < amountOfFire; i++) {
        top_position = getRandomInt(0, 280);
        left_position = getRandomInt(-10, 150);
        createElement(i);
    }

}

function createElement() {
    var image = document.createElement('img');
    image.src = "img/emoji/fire.png";
    image.style.position = 'absolute';
    image.style.zIndex = 3;
    image.style.top = top_position + "px";
    image.style.left = left_position + "px";
    theLeftSide.appendChild(image);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}