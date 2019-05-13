

var listofWords = ["basketball", "cricket", "swimming", "karate", "hockey"];

var computerRandIndex = Math.floor(Math.random() * 5);
var computerPickWord = listofWords[computerRandIndex];
console.log(computerPickWord);
var numberofGuessCount = document.getElementById("numberGuesses");
var displayBoardDiv = document.getElementById("current-word");
var outputWrongDiv = document.getElementById("wrongGuess");
var numberofGuessCount = 12;

var wrongGuessLetter = "";
var rightGuessLetter = [];
var boardGame = [];
for (var i = 0; i < computerPickWord.length; i++) {
    boardGame[i] = "_";

}

displayBoardDiv.textContent = boardGame.join(" ");
var displayRemainingDiv = document.getElementById("numberGuesses");
displayRemainingDiv.textContent = numberofGuessCount;
var userInput = "";
var wins = 0;
var losses = 0;
var remainingGuesses = 0;


function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
        alert("Enter letters only.");
        return false;
    }
    return true;
}


function resetGame() {
    remainingGuesses = numberofGuessCount;
    gameStarted = false;
    computerRandIndex = Math.floor(Math.random() * 5);
    wrongGuessLetter = "";
    rightGuessLetter = [];
    numberofGuessCount = 12;
    computerPickWord = listofWords[computerRandIndex];
    console.log(computerPickWord);
    userInput = "";
    boardGame = [];
    for (var i = 0; i < computerPickWord.length; i++) {
        boardGame[i] = "_";

    }
    remainingGuesses = 0;
}


// Play The Game
function updateBoardGame() {

    for (var i = 0; i < computerPickWord.length; i++) {
        if (computerPickWord[i] === userInput) {
            boardGame[i] = userInput;


        }
    }
    displayBoardDiv.textContent = boardGame.join(" ");
}


document.onkeyup = function (event) {
    userInput = event.key.toLowerCase();
    var alphaExp = /^[a-zA-Z]+$/;
    if  (userInput.match(alphaExp)) {

        if(wrongGuessLetter.indexOf(userInput)===-1)
        {
            updateBoardGame();
            if (boardGame.indexOf("_") === -1) {
                wins++;
                document.getElementById("wins").innerHTML = " " + wins;
    
                resetGame();
            }
            else {
    
                if (computerPickWord.indexOf(userInput) === -1) {
                    numberofGuessCount = numberofGuessCount - 1;
                    wrongGuessLetter = wrongGuessLetter + userInput + ",";
                    displayRemainingDiv.textContent = numberofGuessCount;
                    outputWrongDiv.textContent = wrongGuessLetter;
                    if (numberofGuessCount === 0) {
                        losses++;
                        document.getElementById("losses").textContent = " " + losses;
                        resetGame();
                    }
                }
            }
    

        }
         else{
             alert("letter already pressed!")
         }
    }
    else{
        alert("letters only");
    }     

};




