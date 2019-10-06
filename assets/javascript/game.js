
    var compOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedLetters = [];
       

//    var directionsText = document.getElementById("dir-text");
//    var userChoiceText = document.getElementById("usercho-text");
//    var computerChoiceText = document.getElementById("computercho-text");
//    var winsText = document.getElementById("wins-text");
//    var lossesText = document.getElementById("losses-text");
//    var guessleftText = document.getElementById("guessleft");

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftLetters = document.getElementById("guesses left-text");
var guessedLettersText = document.getElementById("guessed-letters");

var computerGuess = computerChoiceText[Math.floor(Math.random() * computerOptions.length)];


document.onkeyup(function (event) {
       var userGuess = event.key;
       var userGuessLower = userGuess.toLowerCase();
       guessedLetters.push(userGuess);


       if (computerChoices.indexOf(userGuess)) {

              if (userGuess === computerGuess) {
                     wins++;
              } else if (userGuess !== computerGuess) {
                     guessesLeft--;
              }

              winsText.textContent = "wins: " + wins;
              lossesText.textContent = "losses: " + losses;
              guessLeftText.textContent = "Guess Left: " + guessLeft;
              guessedLettersText.textContent = "Your guesses so far " + guessedLetters;

       };


                     
       if (guessLeft < 0) {
              losses++;
              alert("the computer's choice was: " + computerGuess.toUpperCase());
              var playAgain = confirm("you lost, press ok to play again")
              if (playAgain === true) {
                  guessesLeft = 9;
                  guessedLetters = [];
                  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
              }
       }; 
