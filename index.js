// ─────── Node Packages ─────── // 
var chalk = require('chalk');
var inquirer = require("inquirer");

// ─────── Require word.js ─────── // 
// var word = require('./word.js'); 

// ─────── Global Variables ─────── // 
var guess; 
var correctLetters = []; 
var remaingGuesses = 5; 
var losses = 0; 
var wins = 0; 
var correctWord; 
var gameOver = true; 

var wordList = ["PLUM", 
                "MAGENTA",
                "RUBY", 
                "CLEMENTINE", 
                "DAISY"]
           
    console.log(chalk.cyan(`
    ───────────────────────────────────────────────────────────────────────────────────
                                        WELCOME TO
    ───────────────────────────────────────────────────────────────────────────────────

       ●           ●   ● ● ●   ● ● ●   ● ● ●     ● ●    ●     ●  ● ● ●   ● ●    ● ●
        ●         ●   ●     ●  ●    ●  ●    ●   ●       ●     ●  ●      ●      ●
         ●   ●   ●    ●     ●  ● ● ●   ●    ●   ●  ● ●  ●     ●  ● ●     ● ●    ● ●
          ● ● ● ●     ●     ●  ●   ●   ●    ●   ●    ●  ●     ●  ●          ●      ●
           ●   ●       ● ● ●   ●    ●  ● ● ●      ● ●    ● ● ●   ● ● ●   ● ●    ● ●

    ───────────────────────────────────────────────────────────────────────────────────
                                    COLOR EDITION 
    ───────────────────────────────────────────────────────────────────────────────────
    \n`));
    
start()
// Start a new game promt 
function start(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to start a new game?",
            choices: ["Yes", "No"],
            name: "start"
        }
    ]).then(function(response) {
        
        if (response.start === "Yes"){ 
            console.log("\n            Ready to play             \n")
        } else {
            console.log("\n                  ㋡                 \n")
        }
    
    })
}


// Randomly selects a word and uses the Word constructor to store it
function start(){
    if (gameOver === true){
        correctLetters = []; 
        wrongLetters = [];
        remaingGuesses = 5;      
    }
    gameOver = false; 

    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    correctLetters = new Word(currentWord); 
    userGuess();
}


// Prompts the user for each guess and keeps track of the user's remaining guesses
function userGuess() {

  

        // Asks user to guess a letter 
        if(remaingGuesses >= 5) {
            inquirer.prompt([
                {
                type: "input",
                message: "Guess a letter", 
                name: "guess"
                }
            ]).then(function(response) {
                var regex = /^[a-z]+$/i;
                
                if (response.guess.length === 1 && regex.test(response.guess)) {
                    guess = response.guess.toUpperCase();
                console.log(guess); 
                } else {
                    console.log("\n Invalid. Please enter a letter A - Z.\n")
                    userGuess(); 
                // } else {
                // console.log("GAME OVER")
                }   
            });

        }
} 



// Letter.js should not require any other files.
// Word.js should only require Letter.js
// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js
// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)


