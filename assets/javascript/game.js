//Javascript file

//random number generated by the computer between 19 and 120
var randomNumberToMatch = Math.floor(Math.random()*101)+19;

var wins = 0; //to store the number of games won
var losses = 0; //to store the number of games lost
var playerTotalPoints = 0; //total points of the player

//random number for the value of the red crystal between 1 and 12
var redCrystalValue = Math.floor(Math.random()*12)+1; 

//random number for the value of the blue crystal between 1 and 12
var blueCrystalValue = Math.floor(Math.random()*12)+1; 

//random number for the value of the yellow crystal between 1 and 12
var yellowCrystalValue = Math.floor(Math.random()*12)+1; 

//random number for the value of the green crystal between 1 and 12
var greenCrystalValue = Math.floor(Math.random()*12)+1; 


$(document).ready(function() {

function initial(){
    $("#showRandomNumber").html(randomNumberToMatch);
}

//Function to reset the game before a new one
//the value of all the buttons are reinitialized 
function resetGame(){
    playerTotalPoints = 0; 
    $("#showScore").html(playerTotalPoints);
    randomNumberToMatch = Math.floor(Math.random()*101)+19;
    $("#showRandomNumber").html(randomNumberToMatch);
    redCrystalValue = Math.floor(Math.random()*12)+1; 
    blueCrystalValue = Math.floor(Math.random()*12)+1; 
    yellowCrystalValue = Math.floor(Math.random()*12)+1; 
    greenCrystalValue = Math.floor(Math.random()*12)+1; 
}

//Function to check for wins or losses
function checkWinLoss(){
    if(playerTotalPoints === randomNumberToMatch){ //If the player matched the random number
        $("#showResult").html("You won!!"); //the player won
        wins++;                             //increment the wins counter
        $("#showWins").html(wins);
        resetGame();
    }
    else if (playerTotalPoints > randomNumberToMatch){ //If the player exceed the random number
        $("#showResult").html("You lost..."); // the player lost
        losses++;                             //increment the losses counter
        $("#showLosses").html(losses);
        resetGame();
    }
}

//Principal function that will start the game
function startGame() {

    //Display the total points of the player
    $("#showScore").html(playerTotalPoints);

    $("#redCrystal").click(function() { //When the player click on the red crystal
        playerTotalPoints += redCrystalValue; //the value of the crystal is added to the total points 
        $("#showScore").html(playerTotalPoints);//and displayed in the total score section
        checkWinLoss(); //we call the check function to see if there is a win or loss
    });

    $("#blueCrystal").click(function() { //When the player click on the blue crystal
        playerTotalPoints += blueCrystalValue; //the value of the crystal is added to the total points
        $("#showScore").html(playerTotalPoints); //and displayed in the total score section
        checkWinLoss(); //we call the check function to see if there is a win or loss
    });

    $("#yellowCrystal").click(function() { //When the player click on the yellow crystal   
        playerTotalPoints += yellowCrystalValue; //the value of the crystal is added to the total points
        $("#showScore").html(playerTotalPoints); //and displayed in the total score section
        checkWinLoss(); //we call the check function to see if there is a win or loss
    });

    $("#greenCrystal").click(function() { //When the player click on the green crystal
        playerTotalPoints += greenCrystalValue; //the value of the crystal is added to the total points
        $("#showScore").html(playerTotalPoints); //and displayed in the total score section
        checkWinLoss(); //we call the check function to see if there is a win or loss
    });
}

initial();


//*******/MAIN FUNCTION/**********/to start the game
startGame();

});





