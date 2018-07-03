 // The program states the computer wins, even if the user wins. 
 // The game always thinks the player played paper. 
 // The game ignores "Rock" as valid input. It should accept rock/paper/scissors regardless of case. 
 // There may be other bugs! That our testers couldn't surface, be vigilant. 

 // Your Task: 
 // Debug the rock paper scissors program so it can
 // Correctly read and store user input. 
 // Correctly indicate who wins. 

 // Hint: Don’t forget to utilize console logs to see what’s in variables. 

 let gameOver = false;
 let computerChoices = ["rock", "paper", "scissors"];

 function randomFrom(array) {
     return array[(Math.floor(Math.random() * 3))];
 }


 function checkInput(input, computerChoices) {
     if (input === "quit") {
         return true;
     }

     let computerChoice = randomFrom(computerChoices);

     if (computerChoice === "rock" && input === "scissors") {
         console.log("rock beats scissors, computer wins!");
         alert("Computer wins!");
     } else if (computerChoice === "scissors" && input === "paper") {
         console.log("scissors beats paper, computer wins!");
         alert("Computer wins!");
     } else if (computerChoice === "paper" && input === "rock") {
         console.log("paper beats rock, computer wins!");
         alert("Computer wins!");
     } else if (computerChoice === "scissors" && input === "rock") {
         console.log("rock beats scissors, user wins!");
         alert("User wins!");
     } else if (computerChoice === "paper" && input === "scissors") {
         console.log("scissors beats paper, user wins!");
         alert("User wins!");
     } else if (computerChoice === "rock" && input === "paper") {
         console.log("paper beats rock, user wins!");
         alert("User wins!");
     } else if (computerChoice === "rock" && input === "rock") {
         console.log("rock vs rock, its a tie");
     } else if (computerChoice === "paper" && input === "paper") {
         console.log("paper vs paper, its a tie");
     } else if (computerChoice === "scissors" && input === "scissors") {
         console.log("scissors vs scissors, its a tie");
     } else {
         console.log("no one knows what happened....");
     }
 }


 function start(gameOver, computerChoices) {
     while (!gameOver) {
         let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.", " ");
         gameOver = checkInput(playerInput, computerChoices);


     }
 }



 start(gameOver, computerChoices);