// // Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var chalk = require('chalk');

// // Letter constructor 
var Letter = function(correctLetters){
    
    
    // A string value to store the underlying character for the letter
    this.correctLetters = correctLetters; 
    // this.guesses = guesses;
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false; 

// this.thisLetter = function() {
    Letter.prototype.letters = function() {
        if(this.guessed){
            return this.correctLetters; 
        } else {
            return " ◯ "; 
            // return this.correctLetters; 
        }
    }

    this.checkedLetter = function (guess) {
        console.log("these are the letters: " + correctLetters)
        console.log(guess);
        if ( guess === correctLetters) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
      
    };
}



module.exports = Letter;





                              

                