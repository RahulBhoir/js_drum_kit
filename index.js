var numberOfDrums = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", handleMouseClick);
}

function handleMouseClick() {
    var variableOnClick = this.innerText;
    playSound(variableOnClick);
    buttonAnimation(variableOnClick);
}

function playSound(keyPressed) {
    switch (keyPressed) {
        case 'w':
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;

        case 'a':
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;

        case 's':
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;

        case 'd':
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;

        case 'j':
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;

        case 'k':
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;

        case 'l':
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;

        default: console.log(variableOnClick);
    }
}

document.addEventListener('keydown', function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(keyPressed) {
    var activeKey = document.querySelector('.' + keyPressed)
    activeKey.classList.add('pressed');
    setTimeout(function () {
        activeKey.classList.remove('pressed');
    }, 100);
    clearTimeout();
}