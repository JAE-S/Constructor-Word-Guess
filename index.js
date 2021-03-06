// ─────── Node Packages ─────── // 
var chalk = require('chalk');
var inquirer = require("inquirer");

// ─────── Require word.js ─────── // 
var Word = require('./word.js'); 


// ─────── Global Variables ─────── // 
var currentGuess;
var guesses = [];
// var correctLetters = []; 
var correctGuesses = [];
var wrongLetters = []; 
var remainingGuesses = 5; 
var losses = 0; 
var wins = 0; 
var correctWord; 
var gameOver = true; 


           
    console.log(chalk.cyan(`
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                                                     WELCOME TO
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

                        ❍   ___   ❍     ▁▁▁▁        ▁▁▁▁         ▁▁▁▁        ▁    ▁  ❍   ▁▁▁▁▁  ❍   ▁▁▁▁       ▁▁▁     
     __         ___      〵ᐟ _ 〵╱   ❍ ┃  _ 〵 ❍   ┃  _ 〵   ❍  ᐟ ___| ❍  ❍ ┃ ┃❍ | |  〵┃ ____|/  /   __| ❍  /  __| ❍  
     ╲  ╲      ╱  ╱       ┃ ┃ | │     ╲┃ ┃▁) |/   /┃ ┃ | |   〵┃ ┃  _ /   〵┃ ┃〵| |    ┃  _|    <╲▁▁  ╲/   <╲▁▁  ╲/   
    ╱ ╲  ╲ ╱╲ ╱  ╱╲  .-. _┃ ┃▁| │      ┃  ▁ <    ❍ ┃ ┃▁| |╲    ┃ ┃▁| |      ┃ ┃▁ | |    ┃ ┃▁▁▁    ❍▁▁▁) |    ❍ ▁▁) |   
   ❍   ╲        ╱  ❍ 〵_)-〵▁▁  ᐟ      ┃▁┃ ╲▁╲     ┃▁▁▁▁ ᐟ ❍   〵▁▁▁▁|    <<〵▁▁▁▁ ᐟ    ┃▁▁▁▁▁|   |▁▁▁▁ />>   |▁▁▁▁/>>  
    .-._╲  ╱╲  ╱_.-.         ヽヽ      //   ╲╲▁     |||▁        ▁)(|▁    (__)  )(       <<   >>    )(   (__)   )(   (__) 
    〵_)─       ─(_/          (__)    (__)  (__)   (__)_)      (__)__)        (__)     (__) (__)  (__)        (__) 

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                                                    COLOR EDITION 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    \n`)); 
    
newGame()
// Start a new game promt 
function newGame(){
    inquirer.prompt([
        {
            type: "list",
            message: chalk.cyan.dim("Would you like to start a new game? \n ──────────────────────────────────⫸ "),
            choices: ["Yes", "No"],
            name: "start"
        }
    ]).then(function(response) {
        
        if (response.start === "Yes"){ 
            console.log(chalk.greenBright("\n        ٩(˘◡˘)۶ Ready to play         \n"))
            start();
        } else {
            console.log(chalk.redBright("\n                ¯〵_(ツ)_〳¯                 \n"))
        }
    
    })
}

  //───────────────────────────────────────────────────────────────────────────// 
 //                          RANDOMLY SELECTS A WORD                          //
//───────────────────────────────────────────────────────────────────────────// 

// Stores word list 
var wordList = ["PLUM", 
                "MAGENTA",
                "RUBY", 
                "CLEMENTINE", 
                "DAISY"];

// // Randomly selects a word and uses the Word constructor to store it
    function start(){
        if (gameOver === true){
            correctLetters = []; 
            wrongLetters = [];
            remainingGuesses = 5;      
        }

        gameOver = false; 

        correctWord = new Word(wordList[Math.floor(Math.random() * wordList.length)]);
        correctWord.generateLetters();
        // console.log(correctWord);
        userGuess();
    }

  //───────────────────────────────────────────────────────────────────────────// 
 //                      PROMPTS THE USER FOR EACH GUESS                      //
//───────────────────────────────────────────────────────────────────────────// 
  
    function userGuess() {
    // Prompts the user for each guess and keeps track of the user's remaining guesses
            // Asks user to guess a letter 
            if(remainingGuesses > 0 ) {
                inquirer.prompt([
                    {
                    type: "input",
                    message: chalk.cyanBright("(੭ˊᵕˋ)੭  What color am I thinking of?\n " + "\n           " + correctWord.display()) +
                    chalk.cyan("\n\n••••••••••••••••••••••••••••••••••••••••••••" + 
                    chalk.redBright("\nIncorrect Guesses: " + chalk.bold(guesses.join(' '))) +
                            "\n••••••••••••••••••••••••••••••••••••••••••••\n") +
                            chalk.blue("\nRemaining Guesses: " + chalk.green(remainingGuesses) +
                            "\nGuess a letter:"),
                    name: "guess"
                    }
                ]).then(function(response) {
                    var regex = /^[a-z]+$/i;
                    
                    if (response.guess.length === 1 && regex.test(response.guess)) {
                       
                     currentGuess = response.guess.toUpperCase();
                     // Runs Word.check using currentGuess
                     correctWord.check(currentGuess); 
                    

                     guesses.push(currentGuess);
                    
                     remainingGuesses--;
           
                        userGuess(); 
                  
                    } else {
                        console.log("\n Invalid. Please enter a letter A - Z.\n")
                        userGuess(); 
                    }   
                   
            
                });
             
            } else {
                console.log("GAME OVER");
            }
            
    } 

  //───────────────────────────────────────────────────────────────────────────// 
 //                   CHECKS IF USERGUESS MATCHES A LETTER                    //
//───────────────────────────────────────────────────────────────────────────// 



// Letter.js should not require any other files.
// Word.js should only require Letter.js
// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js
// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

