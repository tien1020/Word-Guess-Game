# Word-Guess-Game
My code was based on Phil's peusdo code 
I got this code from: https://stackoverflow.com/questions/23556533/how-do-i-make-an-input-field-accept-only-letters-in-javascript
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

var alphaExp = /^[a-zA-Z]+$/;
    if  (userInput.match(alphaExp)) {
