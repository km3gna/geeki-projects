
// Detecting buttom click
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
    
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    })
};


// Detecting keyboard press
document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

    }
);

function makeSound(key) {

    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            break;
    }
};

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
};


//keydown (not keypress)
/*
Source function:
function Audio (fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        //tap into the audio hardware
        //check the file at fileLocation exists
        //check the file at fileLocation is a sound file
        //play the file at fileLocation
    }
}
*/
// Constructor Function "a factory"
// function Drum (properties) {
//     this.Audio
//     etc...
// }
// var drum1 = new Drum(values of properties);

// var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();