// // Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var chalk = require('chalk');

// // Letter constructor 
var Letter = function(letter){
    
     // A string value to store the underlying character for the letter
    this.letter = letter; 
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false; 

    Letter.prototype.toString = function() {
        if(this.guessed === true){
            return letter; 
        } else {
            return "_"; 
        }
    }

    this.checkAnswer = function(guess) {
        if (guess === letter){
            this.guessed = true; 
        } else {
            this.guessed = false; 
        }
        return this.guessed;
    };
};

module.exports = Letter;





                              

                