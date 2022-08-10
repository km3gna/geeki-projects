
// need to create a while loop that continuously runs the dice game

function resetDice() {

    var defaultDice1 = "images/dice.gif";
    var defaultDice2 = "images/dice.gif";

    document.querySelectorAll("img")[0].setAttribute("src", defaultDice1);
    document.querySelectorAll("img")[1].setAttribute("src", defaultDice2);

    document.querySelector("button").textContent = "Roll!";
}

// Function called when button is clicked to "roll dice" to generate random numbers
function diceRoll() {



        // Change dice images based on random numbers generated
        // Random number between 1 and 6
        var randomNumber1 = Math.floor((Math.random() * 6) + 1);    
        var randomNumber2 = Math.floor((Math.random() * 6) + 1);

        // images/dice1.png - images/dice6.png
        var randomImageSource1 = "images/dice" + randomNumber1 + ".png";    
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

        // randomize dice images based on random number
        document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);    
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        // Change h1 message depending on which randomNumber is bigger
        // If Player 1 wins
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
        }
        // If Player 2 wins
        else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").textContent = "Player 2 Wins 🚩"
        }
        // If it's a draw (equal)
        else {
            document.querySelector("h1").textContent = "🚩 It's a Draw! 🚩"
        }

        document.querySelector("button").textContent = "Reset";

        onclick = document.getElementsByClassName("rolldice").onclick = resetDice;
}

while (true) {

    onclick = document.getElementsByClassName("rolldice").onclick = diceRoll;

}

