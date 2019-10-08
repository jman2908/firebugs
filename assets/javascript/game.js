

var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var toStartText = document.getElementById("tostart-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessedLettersText = document.getElementById("guessedletters-text");


var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

document.onkeyup = function (event) {

    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();
    guessedLetters.push(userGuess);



    if (computerGuess.indexOf(userGuess)) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
                guessedLetters = [];
                computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        }
        else if (userGuess !== computerGuess) {
            guessesLeft--;

            toStartText.textContent = "";
            winsText.textContent = "Wins : " + wins;
            lossesText.textContent = "Losses : " + losses;
            guessesLeftText.textContent = "Guesses left :" + guessesLeft;
            guessedLettersText.textContent = "Your guesses so far: " + guessedLetters;

        };
        if (guessesLeft === 0) {
            losses++;
            alert("You didn't guessed what I'm thinking");
            var playAgain = confirm("You lost. Press OK to play again")
            if (playAgain === true) {
                guessesLeft = 9;
                guessedLetters = [];
                computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

            }

        }

       }
};