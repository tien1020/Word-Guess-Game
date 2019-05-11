

var listofWords = ["basketball", "cricket", "swimming", "karate", "hockey"];

var computerRandIndex = Math.floor(Math.random() * 5);
var computerPickWord = listofWords[computerRandIndex];
console.log(computerPickWord);
var numberofGuessCount = document.getElementById("numberGuesses");
var displayBoardDiv = document.getElementById("current-word");
var outputWrongDiv = document.getElementById("wrongGuess");
var numberofGuessCount = 9;

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
// wins = document.getElementById ("wins");
var losses = 0;
var remainingGuesses = 0;
// var gameStarted = false;        
// var hasFinished = false; 

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
    // clearTextById("current-word");
    // clearTextById("numberGuesses");
    // clearTextById("wrongGuess");
    remainingGuesses = numberofGuessCount;
    gameStarted = false;
    computerRandIndex = Math.floor(Math.random() * 5);
    wrongGuessLetter = "";
    rightGuessLetter = [];
    // document.getElementById("current-word") = "";
    numberofGuessCount = 9;
    computerPickWord = listofWords[computerRandIndex];
    console.log(computerPickWord);

    userInput = "";
    boardGame = [];
    for (var i = 0; i < computerPickWord.length; i++) {
        boardGame[i] = "_";

    }
    // wins = 0;
    // wins = document.getElementById ("wins");
    //  losses = 0;
    remainingGuesses = 0;


}


//   function print(){
// 	document.getElementById("numberGuesses")=numberofGuessCount;
// 	document.getElementById("wins") = wins;




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

function start() {
    console.log("start")
    document.getElementById("wins").innerHTML = wins;   //clear all the variables
    document.getElementById("numberGuesses").innerHTML = numberofGuessCount;
    // calculateComputer()
}


start();

//    //clear board and restart the game after win or all guesses are used
//    function restart() {
//     document.querySelector("#wrongGuess").innerHTML = "";
//     document.querySelector("#numberGuesses").innerHTML = " 9";
//     document.querySelector("#current-word").innerHTML = "";
//     wrongGuessLetter = [];
//     rightGuessLetter = [];
//     remainingGuesses = 9;
//     userInput = "";
//     var boardGame = [];
//     for (var i=0; i<computerPickWord; i++) {
//         boardGame[i]= "_";

//     }

//    }

