var theLeftSide = document.getElementById("apollo");
var top_position;
var left_position;


window.onload = function () {
    setInterval(function () {
        generateFaces();
    }, 250);
};

function generateFaces() {
    theLeftSide.innerHTML = "";
    for (var i = 0; i < 10; i++) {
        top_position = getRandomInt(0, 250);
        left_position = getRandomInt(-50, 150);
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