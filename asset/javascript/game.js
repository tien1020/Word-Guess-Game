

var listofWords = ["Basketball", "cricket", "snowboarding", "karate", "hockey"];

var computerRandIndex = math.floor(math.random()*5);
var computerPickWord = listofWords[computerRandIndex];
var numberofGuessCount = 9;
var wins = 0;
var losses = 0;
var wrongGuessLetter = "";
var rightGuessLetter = "";
var boardGame = [];
    for (var i=0; i<computerPickWord; i++) {
        boardGame[i]= "_";
    }

var userInput = "";

function resetGame (){
    
var listofWords = ["Basketball", "cricket", "snowboarding", "karate", "hockey"];

var computerRandIndex = math.floor(math.random()*5);
var computerPickWord = listofWords[computerRandIndex];
var numberofGuessCount = 9;
var wins = 0;
var losses = 0;
var wrongGuessLetter = "";
var rightGuessLetter = "";
var boardGame = [];
    for (var i=0; i<computerPickWord; i++) {
        boardGame[i]= "_";
    }

var userInput = "";  
};

// Play The Game

document.onkeyup = function(event) {
    userInput= event.key.toLowerCase();
    var displayBoardDiv = document.getElementById("output");
    displayBoardDiv.textContent = boardGame.join(" ");

    if (computerPickWord.indexOf(userInput)>-1) {
        boardGame[computerPickWord.indexOf(userInput)] = userInput;
        displayBoardDiv.textContent=boardGame.join(" ");
        rightGuessLetter = rightGuessLetter + userInput;
        if(computerPickWord===rightGuessLetter) {
            wins++;
            resetGame();
        }
    }

    else {
        numberofGuessCount = numberofGuessCount - 1;
        wrongGuessLetter = wrongGuessLetter + userInput + ",";
        var outputWrongDiv = document.getElementById("wrongGuess");
        outputWrongDiv.textContent = wrongGuessLetter;
        if(numberofGuessCount===0) {
            loss++;
        }
    }
};