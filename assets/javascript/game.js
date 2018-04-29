// array of words
var words = ['supra', 'rx7','240sx', 'skyline', 'silvia', 'mr2', 'civic', 'miata', 'eclipse', '300zx',];
// chose word randomly
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
var underScore = [];
var rightWord = [];
var wrongWord = [];
var wins = [];
var guessLeft = [];


// Push to HTML ID's
var bUnderScore = document.getElementsByClassName("underScore");
var bRightGuess = document.getElementsByClassName("rightGuess");
var bWrongGuess = document.getElementsByClassName("wrongGuess");

// Create underscore function based on length of word
var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
            return underScore;  
        }
        //push underscores to HTML
    bUnderScore[0].innerHTML = generateUnderscore().join(' ')

    // get user keystroke
document.addEventListener('keypress', (event) => {
    var keyNumber = event.which || event.keyCode;
    var keyWord = String.fromCharCode(keyNumber);

// check if guess is right
if(chosenWord.indexOf(keyWord) > -1) {
      // was trying to find a way to fix my issue where the game can not fill in duplicate letters but did not have enough time for(var x = 1; x < chosenWord.length; x++) {
        // add to array
        rightWord.push(keyWord);
        // if right push to right array
        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        bUnderScore[0].innerHTML = underScore.join(' ');
//}
        bRightGuess[0].innerHTML = rightWord.join(' ');
    
          }
          // if wrong push to wrong array
    else {
        wrongWord.push(keyWord);
        bWrongGuess[0].innerHTML = wrongWord;
    }
    
// if user guesses all letters   
        if  (underScore.join('') == chosenWord) {
            alert('You have won!')

    }
}); //key event ends