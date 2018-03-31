var apollo = document.getElementById("apollo");
var phoenix = document.getElementById("phoenix");

var apolloFireplace = document.getElementById("apollo-fireplace");
var phoenixFireplace = document.getElementById("phoenix-fireplace");

var phoenixPartyplace = document.getElementById("phoenix-partyplace");
var apolloPartyplace = document.getElementById("apollo-partyplace");

var top_position;
var left_position;


window.onload = function () {
    setInterval(function () {
        generateApollo(1);
    }, 250);
    setInterval(function () {
        generatePhoenix(3);
    }, 250);
};

function generateApollo(status) {
    apolloFireplace.innerHTML = "";
    apolloPartyplace.innerHTML = "";

    if (status == 1) {
        for (var i = 0; i < 3; i++) {
            top_position = getRandomInt(0, 280);
            left_position = getRandomInt(-10, 150);
            addSleepyEmoji(apolloFireplace);
        }
    }
    if (status == 2) {
        for (var i = 0; i < 2; i++) {
            top_position = getRandomInt(0, 280);
            left_position = getRandomInt(-10, 150);
            addFireEmoji(apolloFireplace);
        }
    }
    if (status == 3) {
        for (var i = 0; i < 8; i++) {
            top_position = getRandomInt(0, 280);
            left_position = getRandomInt(-10, 150);
            addFireEmoji(apolloFireplace);
        }
        for (var i = 0; i < 3; i++) {
            top_position = getRandomInt(0, 175);
            left_position = getRandomInt(-10, 150);
            addPartyEmoji(apolloPartyplace);
        }
    }
}

function generatePhoenix(status) {
    phoenixFireplace.innerHTML = "";
    phoenixPartyplace.innerHTML= "";

    if (status == 1) {
        for (var i = 0; i < 3; i++) {
            top_position = getRandomInt(0, 175);
            left_position = getRandomInt(-10, 150);
            addSleepyEmoji(phoenixFireplace);
        }
    }
    if (status == 2) {
        for (var i = 0; i < 2; i++) {
            top_position = getRandomInt(0, 175);
            left_position = getRandomInt(-10, 150);
            addFireEmoji(phoenixFireplace);
        }
    }
    if (status == 3) {
        for (var i = 0; i < 5; i++) {
            top_position = getRandomInt(0, 175);
            left_position = getRandomInt(-10, 150);
            addFireEmoji(phoenixFireplace);
        }
        for (var i = 0; i < 3; i++) {
            top_position = getRandomInt(0, 175);
            left_position = getRandomInt(-10, 150);
            addPartyEmoji(phoenixPartyplace);
        }
    }
}

function addSleepyEmoji(fireplace) {
    var image = document.createElement('img');
    image.src = "img/emoji/sleepy.png";
    image.id = "fire";
    image.style.position = 'absolute';
    image.style.zIndex = 3;
    image.style.top = top_position + "px";
    image.style.left = left_position + "px";
    fireplace.appendChild(image);
}

function addFireEmoji(fireplace) {
    var image = document.createElement('img');
    image.src = "img/emoji/fire.png";
    image.id = "fire";
    image.style.position = 'absolute';
    image.style.zIndex = 3;
    image.style.top = top_position + "px";
    image.style.left = left_position + "px";
    fireplace.appendChild(image);
}

function addPartyEmoji(partyplace) {
    var image = document.createElement('img');
    image.src = "img/emoji/party.png";
    image.id = "fire";
    image.style.position = 'absolute';
    image.style.zIndex = 3;
    image.style.top = top_position + "px";
    image.style.left = left_position + "px";
    partyplace.appendChild(image);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

