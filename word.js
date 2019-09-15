var letter = require("./letter")

var Word = function(correctWord) {
    this.correctWord = correctWord.split("");
    this.correctLetters = [];
    // console.log(this.correctWord);
    // console.log(this.correctWord.length);

    this.generateLetters = function(){
        var lettersArr = this.correctWord;
    
        for(var i = 0; i < lettersArr.length; i++){
          var addLetter = new letter(lettersArr[i]);
            console.log(addLetter);
            this.correctLetters.push(addLetter);
        
        }
        console.log("\n (੭ˊᵕˋ)੭  What color am I thinking of?\n " + '          ' + this.correctLetters.join(' ') + '\n');
    }

    this.guessed = function(guess){
        for(var i = 0; i < correctLetters.length; i++){
            this.correctLetters[i].checkAnswer(guessed)
        }
    }

    }
  
  

// // Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// // An array of new Letter objects representing the letters of the underlying word

// // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



module.exports = Word;
