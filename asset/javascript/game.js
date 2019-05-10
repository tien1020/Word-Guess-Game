

var listofWords = ["Basketball", "cricket", "snowboarding", "karate", "hockey"];

var computerRandIndex = Math.floor(Math.random()*5);
var computerPickWord = listofWords[computerRandIndex];
console.log(computerPickWord);
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


//show computerPickWord on webpage
// var word = document.getElementById("board");
// word.textContent=computerPickWord;
// function resetGame (){
    


// Play The Game



document.onkeyup = function(event) {
    userInput= event.key.toLowerCase();
    var displayBoardDiv = document.getElementById("board");
    displayBoardDiv.textContent = boardGame.join(" ");

    if (computerPickWord.indexOf(userInput)>-1) {
        boardGame[computerPickWord.indexOf(userInput)] = userInput;
       displayBoardDiv.textContent= boardGame.join(" ");
        rightGuessLetter = rightGuessLetter + userInput;
        if(computerPickWord===rightGuessLetter) {
            wins++;
            wins = document.getElementById ("wins");
            numberofGuessCount = (numberofGuessCount + 1);
            numberofGuessCount = document.getElementById("numberGuess");
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

