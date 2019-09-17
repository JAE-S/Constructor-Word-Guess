var letter = require("./letter")

// var chalk = require('chalk')


  //───────────────────────────────────────────────────────────────────────────// 
 //                         WORD CONSTRUCTOR FUNCTION                         //
//───────────────────────────────────────────────────────────────────────────// 
    
        // Function takes in correctWord parameter
    var Word = function(correctWord) {
        // Holds the correctWord as an array object 
        this.correctWord = correctWord.split("");
        // An array of new Letter objects representing the letters of the underlying word
        this.correctLetters = [];
        var guess= [];

        // this.currentGuess = currentGuess;
        // console.log(currentGuess);
        console.log(this.correctWord);
        console.log(this.correctWord.length);

        this.generateLetters = function(){

            for(var i = 0; i < this.correctWord.length; i++){
            var addLetter = new letter(this.correctWord[i]);
                this.correctLetters.push(addLetter);
        
            }
            // console.log(this.correctLetters);
           
            return this.correctLetters;
        }

        this.check = function(currentGuess){
            for(var i = 0; i > this.correctLetters.length; i++){

                this.currentGuess[i].checkedLetter(currentGuess);
            } 
        return  guess.push(currentGuess);
            // console.log("my guess is: " + currentGuess)
        }

        this.display = function() {
            console.log("the current guess is: " + guess.join(' '));
            console.log(guess)

        var outputArray = [];
            for (var i = 0; i < this.correctWord.length; i++) {
                // if (guess === this.correctWord[i]){
                //     correctLetters[i] = guess;
                //     return correctLetters.join('')
                //     // console.log("this is the right answer" + correctLetters.join(' '))
                // }
             var outputLetter = this.correctLetters[i].letters();
             console.log("i am the output" + outputLetter);
             outputArray.push(outputLetter);
            }
    
            return outputArray.join(" ");
        
        }
    
        };
    

// // Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// // An array of new Letter objects representing the letters of the underlying word

// // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



module.exports = Word;
