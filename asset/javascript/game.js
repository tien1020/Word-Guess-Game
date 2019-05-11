

var listofWords = ["basketball", "cricket", "snowboarding", "karate", "hockey"];

var computerRandIndex = Math.floor(Math.random()*5);
var computerPickWord = listofWords[computerRandIndex];
console.log(computerPickWord);
var numberofGuessCount =document.getElementById("numberGuesses");
var numberofGuessCount = 9;

var wrongGuessLetter = [];
var rightGuessLetter = [];
var boardGame = [];
    for (var i=0; i<computerPickWord; i++) {
        boardGame[i]= "_";
        
    }
// var currentWordDisplay = document.getElementById("current-word");

var userInput = "";
var wins = 0;
// wins = document.getElementById ("wins");
var losses = 0;
var remainingGuesses = 0;
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false; 


function resetGame() {
    // clearTextById("current-word");
    // clearTextById("numberGuesses");
    // clearTextById("wrongGuess");
    remainingGuesses = numberofGuessCount;
    gameStarted = false;
    computerRandIndex = Math.floor(Math.random()*5);
     wrongGuessLetter = [];
    rightGuessLetter = [];
    // document.getElementById("current-word") = "";
    numberofGuessCount = 9;
    computerPickWord = listofWords[computerRandIndex];
    console.log(computerPickWord);
    numberofGuessCount =document.getElementById("numberGuesses");
    userInput = "";
    boardGame = [];
    for (var i=0; i<computerPickWord; i++) {
        boardGame[i]= "_";
        
    }
    wins = 0;
// wins = document.getElementById ("wins");
 losses = 0;
remainingGuesses = 0;
    
  }
  

//   function print(){
// 	document.getElementById("numberGuesses")=numberofGuessCount;
// 	document.getElementById("wins") = wins;




// Play The Game



document.onkeyup = function(event) {
    userInput= event.key.toLowerCase();
    var displayBoardDiv = document.getElementById("current-word");
    displayBoardDiv.textContent = boardGame.join(" ");

    if (computerPickWord.indexOf(userInput)>-1) {
        boardGame[computerPickWord.indexOf(userInput)] = userInput;
       displayBoardDiv.textContent= boardGame.join(" ");
        rightGuessLetter = rightGuessLetter + userInput;
        if(computerPickWord===rightGuessLetter) {
            wins++;
            document.getElementById("wins").innerHTML = " " + wins;
            
            resetGame();
        }
    }

    else {
        numberofGuessCount = numberofGuessCount - 1;
        wrongGuessLetter = wrongGuessLetter + userInput + ",";
        var outputWrongDiv = document.getElementById("wrongGuess");
        outputWrongDiv.textContent = wrongGuessLetter;
        if(numberofGuessCount===0) {
            losses++;
            document.getElementById("numberGuesses") = " " + losses;
            resetGame();
        }
    }
};                   

// function start() {
//     console.log("start")
//     document.querySelector("#wins").innerHTML = " 0"   //clear all the variables
//     document.querySelector("#losses").innerHTML = " 0"   //clear all the variables
//     document.querySelector("#numberGuesses").innerHTML = " 8"
//     calculateComputer()
//    }
   
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

